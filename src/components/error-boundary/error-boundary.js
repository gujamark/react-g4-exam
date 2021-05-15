import React from "react";

import "./styles.css";
class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      return (
        <div className="container d-flex align-items-center vh-100">
          <div className="row">
            <h2 className="text-danger">Something went wrong.</h2>
            <h3 className="text-danger">
              <a href="/">Home Page</a>
            </h3>
          </div>
          <div className="row">
            <details style={{ whiteSpace: "pre-wrap" }}>
              {error && error.toString()}
              <br />
              {errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }

    // just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
