import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import AuthLoadingStackNavigator from './AuthLoadingStackNavigator';
import rootNavigation from '../utils/rootNavigation';
import Colors from '@/constants/Colors';
const Stack = createStackNavigator();
function TopLevelNavigator() {
  return (
    <NavigationContainer ref={rootNavigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingStackNavigator}
          options={{
            //下一级定制header
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{
            //下一级定制header
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopLevelNavigator;
