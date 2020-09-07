import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from '@/navigation/AppNavigator';
import Loading from '@/components/Loading';

function AppViewEntry(props) {
  const {
    loading,
    loadingText,
    statusBarBackgroundColor,
    statusBarHidden,
    statusBarTranslucent,
  } = props.global;

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={statusBarHidden}
        animated={true}
        translucent={statusBarTranslucent}
        backgroundColor={statusBarBackgroundColor}
      />
      <Loading isVisible={loading} text={loadingText} />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

let AppViewContainer = connect(({global}) => ({
  global,
}))(AppViewEntry);

export default AppViewContainer;
