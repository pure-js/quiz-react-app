import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

// type Props = {
//   successBar: string,
//   failureBar: string,
// };

const ProgressBar = ({ successBar, failureBar }) => (
  <>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div style={{ width: successBar }} className={`${bootstrap['progress-bar']} ${bootstrap['bg-success']}`} />
    </div>
    <div style={{ height: '5px' }} className={bootstrap.progress}>
      <div style={{ width: failureBar }} className={`${bootstrap['progress-bar']} ${bootstrap['bg-danger']}`} />
    </div>
  </>
);

export default ProgressBar;
