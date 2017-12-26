import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

const ProgressBar = (props) => {
  const { success, failure } = props;

  return (
    <div>
      <div style={{ height: '5px' }} className={bootstrap.progress}>
        <div id="progress-success" style={success} className={classNames(bootstrap['progress-bar'], bootstrap['bg-success'])} />
      </div>
      <div style={{ height: '5px' }} className={bootstrap.progress}>
        <div id="progress-failure" style={failure} className={classNames(bootstrap['progress-bar'], bootstrap['bg-danger'])} />
      </div>
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
