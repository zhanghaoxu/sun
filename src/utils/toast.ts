import Toast, {ToastOptions} from 'react-native-root-toast';

interface MyToastOptions extends ToastOptions {
  text: string;
}

class Toasting {
  __toast = null;
  __show(options: MyToastOptions) {
    console.log(222);
    if (!options.text) {
      console.warn('toast text is required');
      return;
    }
    //增加两侧间距
    options.text = '    ' + options.text + '    ';

    this.__toast = Toast.show(options.text, {
      duration: options.duration ? options.duration : Toast.durations.SHORT,
      position: options.position ? options.position : -75,
      shadow: true,
      animation: false,
      hideOnPress: true,
      opacity: options.opacity ? options.opacity : 0.9,
      delay: 0,
      backgroundColor: options.backgroundColor
        ? options.backgroundColor
        : '#000',
      textColor: options.textColor ? options.textColor : '#fff',
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  }
  show(text: string) {
    this.showInfo(text);
  }
  showInfo(text: string) {
    this.__show({
      text,
      backgroundColor: '#000',
    });
  }
  showWarning(text: string) {
    this.__show({
      text,
      backgroundColor: 'orange',
    });
  }
  showError(text: string) {
    this.__show({
      text,
      backgroundColor: 'red',
    });
  }
  showSuccess(text: string) {
    this.__show({
      text,
      backgroundColor: 'green',
    });
  }
  hide() {
    Toast.hide(this.__toast);
  }
}

export default new Toasting();
