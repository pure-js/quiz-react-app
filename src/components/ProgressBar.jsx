// @flow
import React from 'react';
import classNames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

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

export default ProgressBar;
