import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '@/constants/Colors';
import {TextInput, Button} from 'react-native-paper';
import {TabView, TabBar} from 'react-native-tab-view';
import {fetchList, addTodo} from '@/store/reducers/Home';

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
  let {dispatch} = props;

  const [index, setIndex] = React.useState(0);
  const [todo, setTodo] = React.useState('');
  const [routes] = React.useState([
    {key: 'unFinish', title: '未完成'},
    {key: 'finish', title: '已完成'},
    {key: 'all', title: '所有'},
  ]);

  React.useEffect(() => {
    dispatch(fetchList('unFinish'));
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addTodo(todo)).then(() => {
      setTodo('');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputViewText}
          label="待办事宜"
          value={todo}
          onChangeText={todo => setTodo(todo)}
        />
        <Button
          onPress={handleAdd}
          mode="contained"
          style={styles.inputViewButton}>
          添加
        </Button>
      </View>
      <View style={styles.tab}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={TabBarView}
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
    overflow: 'scroll',
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
    overflow: 'scroll',
  },
});
