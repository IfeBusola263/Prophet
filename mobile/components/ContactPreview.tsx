import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export default function ContactPreview({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;
  const headers = data[0];
  const rows = data.slice(1);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {headers.map((h: string, i: number) => (
          <Text key={i} style={[styles.cell, styles.header]}>
            {h}
          </Text>
        ))}
      </View>
      <FlatList
        data={rows}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((cell: string, i: number) => (
              <Text
                key={i}
                style={[
                  styles.cell,
                  headers[i]?.toLowerCase().includes('email') &&
                  !isValidEmail(cell)
                    ? styles.invalid
                    : null,
                ]}
              >
                {cell}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 16, width: '100%' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee' },
  cell: { flex: 1, padding: 4, fontSize: 12 },
  header: { fontWeight: 'bold', backgroundColor: '#f0f0f0' },
  invalid: { color: 'red' },
});
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee' },
  cell: { flex: 1, padding: 4, fontSize: 12 },
  header: { fontWeight: 'bold', backgroundColor: '#f0f0f0' },
  invalid: { color: 'red' },
});
