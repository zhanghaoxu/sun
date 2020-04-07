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
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6200ee',
      },
    },
  },
);

export default AuthStack;
