import {Snackbar} from 'react-native-paper';
import React from 'react';
export default function Toast(props) {
  return (
    <Snackbar
      visible={!!props.text}
      onDismiss={props.hideAction}
      duration={3000}
      action={{
        label: props.buttonName,
        onPress: () => {
          props.pressHandler();
        },
      }}>
      {props.text}
    </Snackbar>
  );
}
