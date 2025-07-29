import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import campaignService from '../services/campaignService';
import { useCampaignStore } from '../store/useCampaignStore';
import FilePicker from '../components/FilePicker';

const ComposeScreen = () => {
  const { subject, body, contacts, reset, setBody, setSubject } =
    useCampaignStore();
  const [fileSelected, setFileSelected] = useState(false);
  const [error, setError] = useState('');

  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async () => {
    if (!subject || !body || !fileSelected) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setConfirmation('');
    // Call mock service
    await campaignService.createCampaign({ subject, body, contacts });
    reset();
    setFileSelected(false);
    setConfirmation('Campaign submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
        placeholder="Enter subject"
      />
      <Text style={styles.label}>Body</Text>
      <TextInput
        style={[styles.input, styles.bodyInput]}
        value={body}
        onChangeText={setBody}
        placeholder="Enter body"
        multiline
      />
      <Text style={styles.label}>Contacts File</Text>
      <FilePicker onFilePicked={() => setFileSelected(true)} />

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {confirmation ? (
        <Text style={styles.confirmation}>{confirmation}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} />

      {/* Preview Section */}
      <View style={styles.previewSection}>
        <Text style={styles.previewLabel}>Message Preview:</Text>
        <Text style={styles.previewText}>Subject: {subject}</Text>
        <Text style={styles.previewText}>Body: {body}</Text>
        <Text style={styles.previewLabel}>
          Contact Count: {contacts?.length || 0}
        </Text>
      </View>
    </View>
  );
};

export default ComposeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
  },
  bodyInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
  confirmation: {
    color: 'green',
    marginTop: 8,
  },
  previewSection: {
    marginTop: 32,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
  },
  previewLabel: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  previewText: {
    marginTop: 4,
  },
});
