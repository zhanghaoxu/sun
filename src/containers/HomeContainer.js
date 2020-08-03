import HomeScreen from '@/screens/HomeScreen';
import {connect} from 'react-redux';

let HomeContainer = connect(state => ({
  globalState: state.global,
  homeState:state.home
}))(HomeScreen);

export default HomeContainer;
