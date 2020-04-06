import {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthLoadingStack = createStackNavigator({
  AuthLoading: AuthLoadingScreen,
});

export default AuthLoadingStack;
