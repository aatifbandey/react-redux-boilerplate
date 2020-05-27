import React, { PureComponent } from 'react';
import {
  bool, func, node, string,
} from 'prop-types';
/* eslint-disable */

class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: node,
    debug: bool,
    errorMessage: string,
    render: func,
  };

  static defaultProps = {
    children: null,
    debug: true,
    errorMessage: '',
    render: null,
  };

  state = {
    hasError: false,
  };

  defaultRender = () => {
    const { errorMessage } = this.props;

    const message = errorMessage || 'Sorry, something went wrong.';

    return <div>{message}</div>;
  };
  /** eslint-enable **/

  componentDidCatch(error, info) {
    console.log('Failed component');
    const { debug } = this.props;

    if (debug) {
      console.groupCollapsed(`Error occured!`);
      console.error('[ErrorBoundary] Error message:', error.message);
      console.error('[ErrorBoundary] Error stack:', error.stack);
      console.error('[ErrorBoundary] Component stack:', info.componentStack);
      console.groupEnd();
    }
    // log error if required...
    // if (window.Raven) {
    //   window.Raven.captureException(error, { extra: info });
    // }

    this.setState({ hasError: true });
  }

  render() {
    const { children, render } = this.props;
    const { hasError } = this.state;
    const renderError = render || this.defaultRender;

    return hasError ? renderError() : children;
  }
}

export default ErrorBoundary;
