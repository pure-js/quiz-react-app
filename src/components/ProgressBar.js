import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { success, failure } = props;

  return (
    <div style={{ height: '5px' }} className="progress">
      <div id="progress-success" style={success} className="progress-bar bg-success" />
      <div id="progress-failure" style={failure} className="progress-bar bg-danger" />
    </div>
  );
};
ProgressBar.propTypes = {
  success: PropTypes.object,
  failure: PropTypes.object,
};

export default ProgressBar;
