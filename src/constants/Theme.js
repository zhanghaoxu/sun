import {DefaultTheme} from 'react-native-paper';
import Colors from '@/constants/Colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.main,
  },
};

export default theme;
