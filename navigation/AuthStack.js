import {createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });


export  default AuthStack;
