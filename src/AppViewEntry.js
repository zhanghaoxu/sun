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
  } = props.globalState;

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

let AppViewContainer = connect(state => ({
  globalState: state.global,
}))(AppViewEntry);

export default AppViewContainer;
