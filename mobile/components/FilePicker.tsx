import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { pick } from '@react-native-documents/picker';
import { parseFile } from '../utils/fileParser';

import ContactPreview from './ContactPreview';

type Props = {
  onFilePicked?: () => void;
};

export default function FilePicker({ onFilePicked }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [parsed, setParsed] = useState<any>(null);

  const handlePick = async () => {
    try {
      const [file] = await pick({
        type: [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'text/csv',
        ],
      });
      setFileName(file.name || file.uri);
      const result = await parseFile(file);
      setParsed(result);
      if (onFilePicked) onFilePicked();
    } catch (e) {
      // User cancelled or error
      setFileName(null);
      setParsed(null);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick CSV/XLSX File" onPress={handlePick} />
      {fileName && (
        <Text style={styles.selectedText}>Selected: {fileName}</Text>
      )}
      {parsed && <ContactPreview data={parsed} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16,
    flex: 1,
    width: '100%',
  },
  selectedText: {
    marginTop: 8,
  },
});
