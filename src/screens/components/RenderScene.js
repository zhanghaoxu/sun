import React from 'react';
import {connect} from 'react-redux';
import BaseList from './BaseList';
import {SceneMap} from 'react-native-tab-view';

const UnFinish = ({homeState}) => {
  return <BaseList list={homeState.unFinishList} />;
};
let UnFinishContainer = connect(state => ({
  homeState: state.home,
}))(UnFinish);

const Finish = ({homeState}) => {
  return <BaseList list={homeState.finishList} />;
};
let FinishContainer = connect(state => ({
  homeState: state.home,
}))(Finish);

const All = ({homeState}) => {
  return <BaseList list={homeState.allList} />;
};
let AllContainer = connect(state => ({
  homeState: state.home,
}))(All);

const renderScene = SceneMap({
  unFinish: UnFinishContainer,
  finish: FinishContainer,
  all: AllContainer,
});

export default renderScene;
