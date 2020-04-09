import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '@/constants/Colors';
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerTintColor: colors.headerText,
      headerStyle: {
        backgroundColor: colors.main,
      },
    },
  },
);

export default AuthStack;
