import dva from './dva';

const dispatch = dva.getDispatch();
console.log(dispatch);
type LoadingType = {
  show(text: string): void;
  hide(): void;
};

class Loading {
  show(text: string) {
    dispatch({
      type: 'global/setShowLoading',
      payload: text,
    });
  }
  hide() {
    dispatch({
      type: 'global/setHideLoading',
    });
  }
}

const loading: LoadingType = new Loading();
export default loading;
