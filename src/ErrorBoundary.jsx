import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  }
  
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  
  render() {
    if (this.state.error) {
      return <p>Error</p>;
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
