import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from '@/navigation/AppNavigator';
import NavigationService from '@/utils/navigationService';
import Loading from '@/components/Loading';

class AppViewEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      loading,
      statusBarBackgroundColor,
      statusBarHidden,
      statusBarTranslucent,
    } = this.props.globalState;

    return (
      <View style={styles.container}>
        <StatusBar
          hidden={statusBarHidden}
          animated={true}
          translucent={statusBarTranslucent}
          backgroundColor={statusBarBackgroundColor}
        />
        <Loading isVisible={loading} />
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
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
