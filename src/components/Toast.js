import {Snackbar} from 'react-native-paper';
import React from 'react';
export default function Toast(props) {
  return (
    <Snackbar
      visible={!!props.text}
      onDismiss={props.hideAction}
      duration={2500}
      action={{
        label: props.buttonName,
        onPress: () => {
          console.log(777);
        },
      }}>
      {props.text}
    </Snackbar>
  );
}
