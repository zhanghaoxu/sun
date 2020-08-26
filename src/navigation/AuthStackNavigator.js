import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Colors from '@/constants/Colors';
const AuthStack = createStackNavigator();
const commonHeaderOption = {
  headerTintColor: Colors.headerText,
  headerStyle: {
    backgroundColor: Colors.main,
  },
};
export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '登录',

          headerLeft: null,
          ...commonHeaderOption,
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          ...commonHeaderOption,
          title: '注册',
        }}
      />
    </AuthStack.Navigator>
  );
}
