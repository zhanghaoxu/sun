import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthTabNavigator from './AuthTabNavigator';
import AuthLoadingTabNavigator from './AuthLoadingTabNavigator';
export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Auth: AuthTabNavigator,
      AuthLoading: AuthLoadingTabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
