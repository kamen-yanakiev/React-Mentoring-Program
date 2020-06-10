import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    error: null
  }
  
  static getDerivedStateFromError(error) {
    return { error: error };
  }
  
  render() {
    if (this.state.error) {
      return <p>Error</p>;
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
