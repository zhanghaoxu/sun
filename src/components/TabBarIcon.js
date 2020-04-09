import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={23}
      style={{marginBottom: -3}}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
