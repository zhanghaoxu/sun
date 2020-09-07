import MyScreen from '@/screens/MyScreen';
import {connect} from 'react-redux';

let MyContainer = connect(({global}) => ({
  global,
}))(MyScreen);

export default MyContainer;
