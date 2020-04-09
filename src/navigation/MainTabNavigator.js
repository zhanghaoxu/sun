import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeContainer from '@/containers/HomeContainer';
import FindContainer from '@/containers/FindContainer';
import MyContainer from '@/containers/MyContainer';
import WebViewContainer from '@/containers/WebViewContainer';

const HomeStack = createStackNavigator(
  {
    Home: HomeContainer,
    WebView: WebViewContainer,
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

const FindStack = createStackNavigator(
  {
    Find: FindContainer,
    WebView: WebViewContainer,
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

const MyStack = createStackNavigator(
  {
    My: MyContainer,
    WebView: WebViewContainer,
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
    FindStack,
    MyStack,
  },
  {
    initialRouteName: 'HomeStack',
    backBehavior: 'none',
  },
);

export default tabNavigator;
