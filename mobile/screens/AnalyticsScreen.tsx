import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import analyticsService from '../services/analyticsService';
import StatChart from '../components/StatChart';

const AnalyticsScreen = ({ navigation }: any) => {
  const [stats, setStats] = useState({ openRate: 0, clickRate: 0 });

  useEffect(() => {
    analyticsService.getStats().then(setStats);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navRow}>
        <Button
          title="Campaigns"
          onPress={() => navigation.navigate('Campaigns')}
        />
        <Button
          title="Compose"
          onPress={() => navigation.navigate('Compose')}
        />
      </View>
      <Text style={styles.title}>Analytics</Text>
      <StatChart openRate={stats.openRate} clickRate={stats.clickRate} />
      <Text style={styles.label}>Open Rate: {stats.openRate}%</Text>
      <Text style={styles.label}>Click Rate: {stats.clickRate}%</Text>
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
    marginTop: 16,
    fontSize: 16,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default AnalyticsScreen;
