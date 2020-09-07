import WebViewScreen from '@/screens/WebView/WebViewScreen';
import {connect} from 'react-redux';

let WebViewContainer = connect(({global}) => ({
  global,
}))(WebViewScreen);

export default WebViewContainer;
