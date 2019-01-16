import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';

export default createSwitchNavigator({
  App: MainTabNavigator,
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
},
{
  initialRouteName: 'Auth',
}
);
