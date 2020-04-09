import store from '@/store';
import {setToastingState} from '@/store/actions/Global';

class Toasting {
  show(text = '', buttonName = '', pressHandler = () => {}) {
    if (!text) {
      console.warn('toast 参数text');
      return;
    }
    store.dispatch(
      setToastingState({
        text,
        buttonName,
        pressHandler,
      }),
    );
  }
  hide() {
    store.dispatch(
      setToastingState({
        text: '',
        buttonName: '',
        pressHandler: () => {},
      }),
    );
  }
}
export default new Toasting();
