import React from 'react';
import {StyleSheet, View, BackHandler, ToastAndroid, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {register as registerApi} from '@/apis/auth';
import TextInputWithError from '@/components/TextInputWithError';
import {emailPattern} from '@/utils/pattern';
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: '',
      email: '',
      password: '',
      repassword: '',
      nickNameErrorMessage: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
      repasswordErrorMessage: '',
    };
  }

  initState() {
    this.setState({
      nickName: '',
      email: '',
      password: '',
      repassword: '',
      nickNameErrorMessage: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
      repasswordErrorMessage: '',
    });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    //回退动作
    this.props.navigation.pop();
    return true;
  };

  async register() {
    if (!this.state.nickName) {
      this.setState({
        nickNameErrorMessage: '请输入昵称',
      });
      return;
    }

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

    if (!this.state.repassword) {
      this.setState({
        repasswordErrorMessage: '请输入确认密码',
      });
      return;
    }

    if (this.state.password !== this.state.repassword) {
      this.setState({
        repasswordErrorMessage: '两次密码输入不一致',
      });
      return;
    }

    try {
      let v = await registerApi({
        nickName: this.state.nickName,
        email: this.state.email,
        password: this.state.password,
        repassword: this.state.repassword,
      });
      if (v === 1) {
        Alert.alert(
          '注册成功！',
          '是否立即去往登录页？',
          [
            {
              text: '留在本页',
              onPress: () => {
                this.initState();
              },
              style: 'cancel',
            },

            {text: '去登录页', onPress: () => this.props.navigation.pop()},
          ],
          {cancelable: false},
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  static navigationOptions = {
    title: '请注册',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInputWithError
          label="Nick Name"
          maxLength={30}
          error={!!this.state.nickNameErrorMessage}
          errorMessage={this.state.nickNameErrorMessage}
          style={styles.inputBox}
          value={this.state.nickName}
          onChangeText={nickName => this.setState({nickName})}
        />
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
        <TextInputWithError
          label="Repassword"
          error={!!this.state.repasswordErrorMessage}
          errorMessage={this.state.repasswordErrorMessage}
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.repassword}
          onChangeText={repassword => this.setState({repassword})}
        />
        <Button
          style={styles.registerButton}
          icon="account-plus"
          mode="contained"
          onPress={() => this.register()}>
          立即注册
        </Button>
        <Button
          style={styles.loginButton}
          icon="account"
          mode="contained"
          onPress={() => this.props.navigation.pop()}>
          已有账号？点我登陆
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
    marginTop: 30,
  },
  loginButton: {
    marginTop: 20,
    opacity: 0.8,
  },
  inputBox: {
    backgroundColor: 'transparent',
  },
});
