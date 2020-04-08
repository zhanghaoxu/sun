import React from 'react';
import {StyleSheet, View, BackHandler, ToastAndroid} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {register as registerApi} from '@/apis/auth';
import TextInputWithError from '@/components/TextInputWithError';
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: '',
      email: '',
      password: '',
      repassword: '',
    };
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
    try {
      let v = await registerApi({
        nickName: this.state.nickName,
        email: this.state.email,
        password: this.state.password,
        repassword: this.state.repassword,
      });
      if (v === 1) {
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
          error={true}
          label="Nick Name"
          errorMessage="长度限制"
          style={styles.inputBox}
          value={this.state.nickName}
          onChangeText={nickName => this.setState({nickName})}
        />
        <TextInput
          label="Email"
          value={this.state.email}
          style={styles.inputBox}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          label="Password"
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <TextInput
          label="Repassword"
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
