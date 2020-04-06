import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>登录</Text>
        <TextInput
          label="Nick Name"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <TextInput
          label="Email"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <TextInput
          label="password"
          secureTextEntry={true}
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <Button
          style={styles.login}
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  login: {
    marginTop: 30,
  },
});
