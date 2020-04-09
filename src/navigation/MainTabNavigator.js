import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeContainer from '@/containers/HomeContainer';
import FindContainer from '@/containers/FindContainer';
import MyContainer from '@/containers/MyContainer';
import WebViewContainer from '@/containers/WebViewContainer';
import Colors from '@/constants/Colors';
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
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="home" />,
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
          <TabBarIcon focused={focused} name="search1" />
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
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="user" />,
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
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
    },
  },
);

export default tabNavigator;
