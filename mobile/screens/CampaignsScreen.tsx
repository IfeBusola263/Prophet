import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';

const CampaignsScreen = ({ navigation }: any) => {
  const campaigns = useSelector(state => state.campaign.campaigns || []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('CampaignDetail', { campaign: item })}
    >
      <Text style={styles.name}>{item.subject}</Text>
      <Text style={styles.status}>Status: {item.status || 'Draft'}</Text>
      <Text style={styles.date}>Date: {item.date || '-'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navRow}>
        <Button
          title="Compose"
          onPress={() => navigation.navigate('Compose')}
        />
        <Button
          title="Analytics"
          onPress={() => navigation.navigate('Analytics')}
        />
      </View>
      <Text style={styles.title}>Campaigns</Text>
      <FlatList
        data={campaigns}
        keyExtractor={(_, idx) => String(idx)}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No campaigns yet.</Text>}
      />
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
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
  },
  status: {
    color: '#555',
    marginTop: 4,
  },
  date: {
    color: '#888',
    marginTop: 2,
  },
  empty: {
    marginTop: 32,
    color: '#aaa',
    textAlign: 'center',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default CampaignsScreen;
