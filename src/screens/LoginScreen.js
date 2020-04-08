import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: '请登录',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Email"
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          label="password"
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Button
          style={styles.loginButton}
          icon="account"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          立即登录
        </Button>
        <Button
          style={styles.registerButton}
          icon="account-plus"
          mode="contained"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          还没有账号？点我注册
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  registerButton: {
    marginTop: 20,
    opacity: 0.8,
  },
  loginButton: {
    marginTop: 30,
  },
  inputBox: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
});
