import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
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
          value={this.state.text}
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
          onPress={() => console.log('Pressed')}>
          立即登录
        </Button>
        <Button
          style={styles.login}
          icon="camera"
          mode="contained"
          onPress={() => {
            console.warn('111');
            console.log(this.props.navigation);
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
  login: {
    marginTop: 30,
  },
  inputBox: {
    backgroundColor: 'transparent',
  },
});
