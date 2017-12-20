import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: 5 + "px"}} className="progress">
        <div id="progress-success" style={this.props.success} className="progress-bar bg-success"></div>
        <div id="progress-failure" style={this.props.failure} className="progress-bar bg-danger"></div>
      </div>
    );
  }
}

export default ProgressBar;
