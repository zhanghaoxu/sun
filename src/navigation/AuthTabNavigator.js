import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default AuthStack;
