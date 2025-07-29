import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import campaignService from '../services/campaignService';
import { useCampaignStore } from '../store/useCampaignStore';
import FilePicker from '../components/FilePicker';

const ComposeScreen = ({ navigation }: any) => {
  const { subject, body, contacts, reset, setBody, setSubject, addCampaign } =
    useCampaignStore();
  const [fileSelected, setFileSelected] = useState(false);
  const [error, setError] = useState('');

  const [confirmation, setConfirmation] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Voice handlers
  React.useEffect(() => {
    Voice.onSpeechResults = e => {
      if (e.value && e.value.length > 0) {
        setBody(body + (body ? ' ' : '') + e.value[0]);
      }
      setIsRecording(false);
    };
    Voice.onSpeechEnd = () => setIsRecording(false);
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [body, setBody]);

  const startVoice = async () => {
    setIsRecording(true);
    try {
      await Voice.start('en-US');
    } catch (e) {
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!subject || !body || !fileSelected) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setConfirmation('');
    setIsSubmitting(true);
    try {
      await campaignService.createCampaign({ subject, body, contacts });
      addCampaign({
        subject,
        body,
        contacts,
        status: 'Draft',
        date: new Date().toLocaleString(),
      });
      reset();
      setFileSelected(false);
      setConfirmation('Campaign submitted!');
    } catch (err) {
      setError('Failed to submit campaign.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subject</Text>
      <View style={styles.navRow}>
        <Button
          title="Back to Campaigns"
          onPress={() => navigation.navigate('Campaigns')}
        />
        <Button
          title="Analytics"
          onPress={() => navigation.navigate('Analytics')}
        />
      </View>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
        placeholder="Enter subject"
      />
      <Text style={styles.label}>Body</Text>
      <View style={styles.bodyRow}>
        <TextInput
          style={[styles.input, styles.bodyInput, styles.bodyFlex]}
          value={body}
          onChangeText={setBody}
          placeholder="Enter body"
          multiline
        />
        <TouchableOpacity
          style={styles.micButton}
          onPress={startVoice}
          disabled={isRecording}
        >
          <Text style={styles.micIcon}>{isRecording ? '🎤...' : '🎤'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Contacts File</Text>
      <FilePicker onFilePicked={() => setFileSelected(true)} />

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {confirmation ? (
        <Text style={styles.confirmation}>{confirmation}</Text>
      ) : null}
      <Button
        title={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={handleSubmit}
        disabled={isSubmitting}
      />

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
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyFlex: {
    flex: 1,
  },
  micButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#e3e3e3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  micIcon: {
    fontSize: 24,
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
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});
