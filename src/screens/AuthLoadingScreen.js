import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import store from '@/store';
import {setIsLogin, postIsLogin} from '@/store/actions/Auth';
import colors from '@/constants/Colors';
class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
    let isLogin = 0;
    if (!userToken) {
      store.dispatch(setIsLogin(0));
      //无userToken
    } else {
      try {
        let result = await store.dispatch(postIsLogin());

        isLogin = result.isLogin;
        if (!isLogin) {
          await AsyncStorage.removeItem('userToken');
        }
      } catch (e) {
        console.log(e);
      }
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(isLogin ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.main} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;
