import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WebViewScreen from '@/screens/WebView/index';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    WebView: WebViewScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible,
        tabBarLabel: '发现',
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="ios-add" />
        ),
      };
    },
  },
);

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    WebView: WebViewScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible,
        tabBarLabel: '发现',
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="ios-add" />
        ),
      };
    },
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    WebView: WebViewScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible,
        tabBarLabel: '发现',
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} name="ios-add" />
        ),
      };
    },
  },
);

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    initialRouteName: 'HomeStack',
    backBehavior: 'none',
  },
);

export default tabNavigator;
