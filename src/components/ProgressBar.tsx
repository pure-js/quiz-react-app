import React, { memo } from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

type IProps = {
  successBar: string;
  failureBar: string;
}

const ProgressBar: React.FC<IProps> = ({ successBar, failureBar }) => (
  <>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div style={{ width: successBar }} className={`${bootstrap['progress-bar']} ${bootstrap['bg-success']}`} />
    </div>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div style={{ width: failureBar }} className={`${bootstrap['progress-bar']} ${bootstrap['bg-danger']}`} />
    </div>
  </>
);

export default memo(ProgressBar);
