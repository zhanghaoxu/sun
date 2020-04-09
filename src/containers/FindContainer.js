import FindScreen from '@/screens/HomeScreen';
import {connect} from 'react-redux';

let FindContainer = connect(state => ({
  globalState: state.global,
}))(FindScreen);

export default FindContainer;
