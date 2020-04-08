import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function TextInputWithError(props) {
  if (props.errorMessage) {
    return (
      <View>
        <TextInput {...props} />
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      </View>
    );
  }
  return <TextInput {...props} />;
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
  },
});
