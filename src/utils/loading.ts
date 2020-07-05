import store from '../store/index';
import {setLoadingState} from '../store/actions/Global';

type LoadingType = {
  show(text: string): void;
  hide(): void;
};

class Loading {
  show(text: string) {
    store.dispatch(setLoadingState(true, text));
  }
  hide() {
    store.dispatch(setLoadingState(false));
  }
}

const loading: LoadingType = new Loading();
export default loading;
