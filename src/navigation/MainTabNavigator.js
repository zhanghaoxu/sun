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
    <HomeStack.Navigator mode="modal" headerMode="none">
      <HomeStack.Screen name="Home" component={HomeContainer} />
      <HomeStack.Screen name="WebView" component={WebViewContainer} />
    </HomeStack.Navigator>
  );
}

const FindStack = createStackNavigator();

function FindStackScreen() {
  return (
    <FindStack.Navigator mode="modal" headerMode="none">
      <FindStack.Screen name="Find" component={FindContainer} />
      <FindStack.Screen name="WebView" component={WebViewContainer} />
    </FindStack.Navigator>
  );
}

const MyStack = createStackNavigator();

function MyStackScreen() {
  return (
    <MyStack.Navigator mode="modal" headerMode="none">
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
      screenOptions={({route}) => {
        const tabBarMap = {
          HomeStack: {
            name: '首页',
            icon: 'home',
          },
          FindStack: {
            name: '发现',
            icon: 'search1',
          },
          MyStack: {
            name: '我的',
            icon: 'user',
          },
        };
        const {name, icon} = tabBarMap[route.name];
        return {
          tabBarLabel: name,
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name={icon} />
          ),
        };
      }}
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
