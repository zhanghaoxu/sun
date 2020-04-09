export function setLoadingState(v) {
  return {
    type: 'SET_LOADING_STATE',
    loading: v,
  };
}

export function setToastingState(v) {
  return {
    type: 'SET_TOASTING_STATE',
    toasting: v,
  };
}
