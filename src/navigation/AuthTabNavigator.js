import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
});

export default AuthStack;
