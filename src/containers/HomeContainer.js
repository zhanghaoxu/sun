import HomeScreen from '@/screens/HomeScreen';
import {connect} from 'react-redux';

let HomeContainer = connect(state => ({
  globalState: state.global,
}))(HomeScreen);

export default HomeContainer;
