import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text>LOINg</Text>
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
