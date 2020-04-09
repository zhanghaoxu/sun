import Modal from 'react-native-modal';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function Loading(props) {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ccc" />
        <Text style={styles.textStyle}>
          {props.text ? props.text : '请求发送中，请稍后...'}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 5,
    color: '#ccc',
    fontSize: 12,
  },
});
