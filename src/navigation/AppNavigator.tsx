import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './rootStack.types';

import BottomTabNavigator from './BottomTabNavigator';
import GuideContentScreen from '../screens/GuideContentScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

        <Stack.Screen name="GuideContent" component={GuideContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
