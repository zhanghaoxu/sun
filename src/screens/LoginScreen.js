import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import TextInputWithError from '@/components/TextInputWithError';
import {emailPattern} from '@/utils/pattern';
import {login} from '@/apis/auth';
import AsyncStorage from '@react-native-community/async-storage';
import toast from '../utils/toast';
var PushNotification = require('react-native-push-notification');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
    };
  }

  static navigationOptions = {
    title: '请登录',
  };

  async login() {
    if (!this.state.email) {
      this.setState({
        emailErrorMessage: '请输入邮箱',
      });
      return;
    }

    if (!emailPattern.test(this.state.email)) {
      this.setState({
        emailErrorMessage: '邮箱格式不正确',
      });
      return;
    }

    if (!this.state.password) {
      this.setState({
        passwordErrorMessage: '请输入密码',
      });
      return;
    }
    try {
      let v = await login({
        account: this.state.email,
        password: this.state.password,
      });

      if (v.userToken) {
        await AsyncStorage.setItem('userToken', v.userToken);
        this.props.navigation.navigate('Main');
      } else {
        toast.showError('服务端出现异常，请稍后再试');
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputWithError
          label="Email"
          error={!!this.state.emailErrorMessage}
          errorMessage={this.state.emailErrorMessage}
          value={this.state.email}
          style={styles.inputBox}
          onChangeText={email => this.setState({email})}
        />
        <TextInputWithError
          label="Password"
          error={!!this.state.passwordErrorMessage}
          errorMessage={this.state.passwordErrorMessage}
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Button
          style={styles.loginButton}
          icon="account"
          mode="contained"
          onPress={() => this.login()}>
          立即登录
        </Button>
        <Button
          style={styles.registerButton}
          icon="account-plus"
          mode="contained"
          onPress={() => {
            /* PushNotification.localNotification({
              message: 'My Notification Message', // (required)
            }); */
            //toast.showError('网络错误！');
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
