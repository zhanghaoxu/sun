import MyScreen from '@/screens/MyScreen';
import {connect} from 'react-redux';

let MyContainer = connect(state => ({
  globalState: state.global,
}))(MyScreen);

export default MyContainer;
