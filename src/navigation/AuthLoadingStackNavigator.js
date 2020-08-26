import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthLoadingStack = createStackNavigator();

export default function AuthLoadingStackScreen() {
  return (
    <AuthLoadingStack.Navigator mode="modal" headerMode="nome">
      <AuthLoadingStack.Screen
        name="AuthLoading"
        component={AuthLoadingScreen}
      />
    </AuthLoadingStack.Navigator>
  );
}
