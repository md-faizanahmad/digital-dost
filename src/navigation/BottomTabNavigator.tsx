import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  BookOpen,
  Bookmark,
  UserRound,
  Settings,
} from 'lucide-react-native';

import type { RootTabParamList } from './navigation.types';

import HomeScreen from '../screens/HomeScreen';
import LearnScreen from '../screens/LearnScreen';
import SavedScreen from '../screens/SavedScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#111111',
        tabBarInactiveTintColor: '#888888',

        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5E5',
          borderTopWidth: 1,
          elevation: 0,

          height: 64 + insets.bottom,
          paddingTop: 8,
          paddingBottom: Math.max(insets.bottom, 8),
        },

        tabBarItemStyle: {
          paddingVertical: 0,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <House color={color} size={22} strokeWidth={focused ? 2.4 : 1.8} />
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color, focused }) => (
            <BookOpen
              color={color}
              size={22}
              strokeWidth={focused ? 2.4 : 1.8}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Bookmark
              color={color}
              size={22}
              strokeWidth={focused ? 2.4 : 1.8}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Settings
              color={color}
              size={22}
              strokeWidth={focused ? 2.4 : 1.8}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
