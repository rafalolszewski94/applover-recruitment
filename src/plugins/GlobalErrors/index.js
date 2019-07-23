import ErrorBarComponent from './ErrorBar';

const ErrorBar = {
  install(Vue) {
    this.instance = new Vue();

    Vue.component('error-bar', ErrorBarComponent);

    /* eslint-disable-next-line */
    Vue.prototype.$errorBar = {
      show(args) {
        ErrorBar.instance.$emit('show', args);
      }
    };
  }
};

export default ErrorBar;
