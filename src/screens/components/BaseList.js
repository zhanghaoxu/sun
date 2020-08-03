import {List} from 'react-native-paper';
import React from 'react';
import {FlatList} from 'react-native';
const BaseList = props => {
  return (
    <FlatList
      data={props.list}
      renderItem={({item}) => <List.Item key={item.name} title={item.name} />}
    />
  );
};
export default BaseList;
