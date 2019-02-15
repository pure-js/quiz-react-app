// @flow
import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

type Props = {
  success: string,
  failure: string,
};

const ProgressBar = ({ success, failure }: Props) => (
  <>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div id="progress-success" style={success} className={`${bootstrap['progress-bar']} ${bootstrap['bg-success']}`} />
    </div>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div id="progress-failure" style={failure} className={`${bootstrap['progress-bar']} ${bootstrap['bg-danger']}`} />
    </div>
  </>
);

export default ProgressBar;
