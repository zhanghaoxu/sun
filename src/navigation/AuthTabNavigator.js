import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerTitleStyle: {alignSelf: 'center'},
      header: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 500,
        justifyContent: 'space-between',
        alignSelf: 'center',
      },
    },
  },
);

export default AuthStack;
