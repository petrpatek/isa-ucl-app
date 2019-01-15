import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SubjectsScreen from '../screens/SubjectsScreen';
import SubjectScreen from '../screens/SubjectScreen';
import ExamsScreen from '../screens/ExamsScreen';
import MessagesScreen from '../screens/MessagesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-school'
          : 'md-school'
      }
    />
  ),
};

const ExamsStack = createStackNavigator({
  Exams: ExamsScreen,
});

ExamsStack.navigationOptions = {
  tabBarLabel: 'Exams',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-create' : 'pencil'
      }
    />
  ),
};

const SubjectStack = createStackNavigator({
  Links: SubjectsScreen,
  Subject: SubjectScreen
});

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messeges',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatboxes'
      }
    />
  ),
};

SubjectStack.navigationOptions = {
  tabBarLabel: 'Subjects',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SubjectStack,
  ExamsStack,
  MessagesStack,
  SettingsStack
});
