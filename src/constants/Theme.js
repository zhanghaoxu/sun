import {DefaultTheme} from 'react-native-paper';
import colors from '@/constants/Colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.main,
  },
};

export default theme;
