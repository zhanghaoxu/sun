import React from 'react';
import {StyleSheet, View, BackHandler} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {register as registerApi} from '@/apis/auth';
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

  register() {
    registerApi({
      nickName: this.state.nickName,
      email: this.state.email,
    })
      .then(v => {
        console.warn(v);
      })
      .catch(e => {
        console.warn(e);
      });
  }

  static navigationOptions = {
    title: '请注册',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Nick Name"
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
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
});
