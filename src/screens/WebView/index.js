import WebViewScreen from './WebViewScreen';
import {connect} from 'react-redux';

let WebViewScreenContainer = connect(state => ({
  globalState: state.global,
}))(WebViewScreen);

export default WebViewScreenContainer;
