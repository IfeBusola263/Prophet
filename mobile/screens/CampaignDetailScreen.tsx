import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CampaignDetailScreen = ({ route }: any) => {
  const { campaign } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campaign Detail</Text>
      <Text style={styles.label}>Subject:</Text>
      <Text style={styles.value}>{campaign.subject}</Text>
      <Text style={styles.label}>Body:</Text>
      <Text style={styles.value}>{campaign.body}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{campaign.status}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{campaign.date}</Text>
      <Text style={styles.label}>Contacts:</Text>
      <Text style={styles.value}>{campaign.contacts.length} contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    marginTop: 4,
    color: '#333',
  },
});

export default CampaignDetailScreen;
