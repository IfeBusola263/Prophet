import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import FilePicker from '../components/FilePicker';

export default function ComposeScreen() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [fileSelected, setFileSelected] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!subject || !body || !fileSelected) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // Submit logic here
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
      {/* FilePicker should set fileSelected to true when a file is picked */}
      <FilePicker onFilePicked={() => setFileSelected(true)} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

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
});
