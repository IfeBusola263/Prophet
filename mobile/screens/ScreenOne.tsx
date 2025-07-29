import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ScreenOne({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen One</Text>
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
}
