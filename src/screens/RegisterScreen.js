import React from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
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
          label="password"
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <TextInput
          label="repassword"
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.repassword}
          onChangeText={repassword => this.setState({repassword})}
        />
        <Button
          style={styles.login}
          icon="camera"
          mode="contained"
          onPress={() => this.props.navigation.pop()}>
          立即注册
        </Button>
        <Button
          style={styles.login}
          icon="camera"
          mode="contained"
          onPress={() => this.props.navigation.pop()}>
          返回登录页
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
  login: {
    marginTop: 30,
  },
  inputBox: {
    backgroundColor: 'transparent',
  },
});
