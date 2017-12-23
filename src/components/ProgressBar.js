import React from 'react';
import PropTypes from 'prop-types';

import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

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
  success: PropTypes.shape({
    width: PropTypes.string,
  }),
  failure: PropTypes.shape({
    width: PropTypes.string,
  }),
};

ProgressBar.defaultProps = {
  success: '0%',
  failure: '0%',
};

export default ProgressBar;
