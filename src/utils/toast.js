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
      position: options.position ? options.position : Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      opacity: 1,
      delay: 0,
      backgroundColor: options.backgroundColor
        ? options.backgroundColor
        : '#ddd',
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
      backgroundColor: '#fff',
      textColor: '#000',
    });
  }
  showWarning(text) {}
  showError(text) {}
  showSuccess(text) {}
  hide() {
    Toast.hide(this.__toast);
  }
}
export default new Toasting();
