import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ScreenTwo({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen Two</Text>
      <Button
        title="Go to Screen Three"
        onPress={() => navigation.navigate('ScreenThree')}
      />
    </View>
  );
}
