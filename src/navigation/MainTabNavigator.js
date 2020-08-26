import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeContainer from '@/containers/HomeContainer';
import FindContainer from '@/containers/FindContainer';
import MyContainer from '@/containers/MyContainer';
import WebViewContainer from '@/containers/WebViewContainer';
import Colors from '@/constants/Colors';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      mode="modal"
      headerMode="none"
      navigationOptions={({navigation}) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }

        return {
          tabBarVisible,
          tabBarLabel: '首页',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        };
      }}>
      <HomeStack.Screen name="Home" component={HomeContainer} />
      <HomeStack.Screen name="WebView" component={WebViewContainer} />
    </HomeStack.Navigator>
  );
}

const FindStack = createStackNavigator();

function FindStackScreen() {
  return (
    <FindStack.Navigator
      mode="modal"
      headerMode="none"
      navigationOptions={({navigation}) => {
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
      }}>
      <FindStack.Screen name="Find" component={FindContainer} />
      <FindStack.Screen name="WebView" component={WebViewContainer} />
    </FindStack.Navigator>
  );
}

const MyStack = createStackNavigator();

function MyStackScreen() {
  return (
    <MyStack.Navigator
      mode="modal"
      headerMode="none"
      navigationOptions={({navigation}) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }

        return {
          tabBarVisible,
          tabBarLabel: '我的',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        };
      }}>
      <MyStack.Screen name="My" component={MyContainer} />
      <MyStack.Screen name="WebView" component={WebViewContainer} />
    </MyStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      backBehavior="none"
      tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="FindStack" component={FindStackScreen} />
      <Tab.Screen name="MyStack" component={MyStackScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
