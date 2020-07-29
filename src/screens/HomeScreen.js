import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyWebView from '@/components/MyWebView';
import Config from 'react-native-config';
import Colors from '@/constants/Colors';
import {TextInput, Button, List, Dimensions} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
const expanded = () => {};
const handlePress = () => {};

const BaseList = props => {
  return (
    <List.Section>
      {props.list.map(v => {
        return <List.Item title={v.name} />;
      })}
    </List.Section>
  );
};
const unFinish = () => (
  <View style={{}}>
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  </View>
);

const finish = () => <View style={{}} />;

const all = () => {
  return <View style={{}} />;
};

export default function HomeScreen(props) {
  const webview_url = `${Config.WEBVIEW_BASE_URL}#/home`;

  const [value, setValue] = React.useState('left');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'unFinish', title: '未完成'},
    {key: 'finish', title: '已完成'},
    {key: 'all', title: '所有'},
  ]);

  const renderScene = SceneMap({
    unFinish,
    finish,
    all,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputViewText} label="待办事宜" />
        <Button mode="contained" style={styles.inputViewButton}>
          添加
        </Button>
      </View>
      <View style={styles.tab}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{backgroundColor: Colors.main}}
              style={{
                backgroundColor: Colors.main,
              }}
            />
          )}
          initialLayout={{
            flex: 1,
          }}
        />
      </View>
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
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputViewText: {
    flex: 6,
    backgroundColor: 'transparent',
  },
  inputViewButton: {
    flex: 1,
    marginLeft: 8,
  },

  tab: {
    flex: 1,
    marginTop: 10,
  },
});
