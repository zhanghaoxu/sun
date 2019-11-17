import {createStackNavigator} from 'react-navigation-stack';
// FindStack
import FindScreen from '@/pages/Find';
import WebView from '@/pages/WebView';
const FindStack = createStackNavigator(
  {
    Find: FindScreen,
    WebView: WebView,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible,
        tabBarLabel: '发现',
      };
    },
  },
);
export default FindStack;
