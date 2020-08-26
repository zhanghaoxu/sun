import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import AuthLoadingStackNavigator from './AuthLoadingStackNavigator';
import rootNavigation from '../utils/rootNavigation';

const Stack = createStackNavigator();
function TopLevelNavigator() {
  return (
    <NavigationContainer ref={rootNavigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingStackNavigator}
        />
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopLevelNavigator;
