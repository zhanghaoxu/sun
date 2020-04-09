import WebViewScreen from '@/screens/WebView/WebViewScreen';
import {connect} from 'react-redux';

let WebViewContainer = connect(state => ({
  globalState: state.global,
}))(WebViewScreen);

export default WebViewContainer;
