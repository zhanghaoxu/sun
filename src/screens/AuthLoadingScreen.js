import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import dva from '@/utils/dva';
import colors from '@/constants/Colors';

const dispatch = dva.getDispatch();
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
      dispatch({
        type: 'auth/isLogin',
        payload: 0,
      });
      //无userToken
    } else {
      try {
        let result = await dispatch({
          type: 'setIsLogin',
        });
        console.log('result:', result);
        isLogin = result.isLogin;
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
