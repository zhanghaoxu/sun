import {TextInput, HelperText} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';
export default function TextInputWithError(props) {
  if (props.errorMessage) {
    return (
      <View>
        <TextInput {...props} />
        <HelperText type="error" visible={props.errorMessage}>
          {props.errorMessage}
        </HelperText>
      </View>
    );
  }
  return <TextInput {...props} />;
}
