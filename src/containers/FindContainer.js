import FindScreen from '@/screens/HomeScreen';
import {connect} from 'react-redux';

let FindContainer = connect(({global}) => ({
  global,
}))(FindScreen);

export default FindContainer;
