import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '@/constants/Colors';
import {TextInput, Button} from 'react-native-paper';
import {TabView, TabBar} from 'react-native-tab-view';

import renderScene from './components/RenderScene';
const TabBarView = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: Colors.main}}
    style={{
      backgroundColor: Colors.main,
    }}
  />
);

export default function HomeScreen(props) {
  let {dispatch, global} = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text>当前数值：{global.number}</Text>
      </View>
      <Button
        onPress={() => {
          dispatch({
            type: 'global/add',
          });
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});
