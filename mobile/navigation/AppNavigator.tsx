import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
