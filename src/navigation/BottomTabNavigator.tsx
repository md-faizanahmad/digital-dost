import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { House, BookOpen, Bookmark, UserRound } from 'lucide-react-native';

import type { RootTabParamList } from './navigation.types';

import HomeScreen from '../screens/HomeScreen';
import LearnScreen from '../screens/LearnScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#111111',
        tabBarInactiveTintColor: '#888888',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5E5',
          borderTopWidth: 1,
          elevation: 0,
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <House
              color={color}
              size={size}
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color, size, focused }) => (
            <BookOpen
              color={color}
              size={size}
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size, focused }) => (
            <Bookmark
              color={color}
              size={size}
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <UserRound
              color={color}
              size={size}
              strokeWidth={focused ? 2.5 : 1.8}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
