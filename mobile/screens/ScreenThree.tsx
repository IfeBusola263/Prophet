import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ScreenThree({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen Three</Text>
      <Button
        title="Go to Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
    </View>
  );
}
