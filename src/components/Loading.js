import Modal from 'react-native-modal';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function Loading(props) {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ccc" />
        <View style={styles.textContainerStyle}>
          <Text style={styles.textStyle}>
            {props.text ? props.text : '加载中......'}
          </Text>
        </View>
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
  textContainerStyle: {
    paddingTop: 20,
  },
  textStyle: {
    color: '#ccc',
    fontSize: 13,
  },
});
