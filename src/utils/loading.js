import store from '@/store';
import {setLoadingState} from '@/store/actions/Global';

class Loading {
  show() {
    store.dispatch(setLoadingState(true));
  }
  hide() {
    store.dispatch(setLoadingState(false));
  }
}
export default new Loading();
