import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '@/constants/Colors';
const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      defaultNavigationOptions={{
        headerTintColor: colors.headerText,
        headerStyle: {
          backgroundColor: colors.main,
        },
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
