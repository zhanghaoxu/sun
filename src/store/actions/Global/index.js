export function setLoadingState(loading, loadingText) {
  return {
    type: 'SET_LOADING_STATE',
    loading,
    loadingText,
  };
}
