import HomeScreen from '@/screens/HomeScreen';
import {connect} from 'react-redux';

let HomeContainer = connect(({global}) => ({
  global,
}))(HomeScreen);

export default HomeContainer;
