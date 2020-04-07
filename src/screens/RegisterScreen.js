import React from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
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
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <TextInput
          label="Email"
          value={this.state.text}
          style={styles.inputBox}
          onChangeText={text => this.setState({text})}
        />
        <TextInput
          label="password"
          style={styles.inputBox}
          secureTextEntry={true}
          value={this.state.text}
          onChangeText={text => this.setState({text})}
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
