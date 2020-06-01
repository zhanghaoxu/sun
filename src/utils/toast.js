import Toast from 'react-native-root-toast';

class Toasting {
  __toast = null;
  __show(options) {
    if (!options.text) {
      console.warn('toast text is required');
      return;
    }
    this.__toast = Toast.show(options.text, {
      duration: options.duration ? options.duration : Toast.durations.SHORT,
      position: options.position ? options.position : 75,
      shadow: true,
      animation: true,
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
  show(text) {
    this.showInfo(text);
  }
  showInfo(text) {
    this.__show({
      text,
      backgroundColor: '#000',
    });
  }
  showWarning(text) {
    this.__show({
      text,
      backgroundColor: 'orange',
    });
  }
  showError(text) {
    this.__show({
      text,
      backgroundColor: 'red',
    });
  }
  showSuccess(text) {
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
