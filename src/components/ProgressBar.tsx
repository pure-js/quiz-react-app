import React, { memo } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
  successBar: number;
  failureBar: number;
}

const ProgressBar: React.FC<IProps> = ({
  successBar,
  failureBar,
}: IProps): React.ReactElement => (
  <>
    <LinearProgress
      style={{ height: '5px' }}
      variant="determinate"
      value={successBar}
      color="primary"
    />
    <LinearProgress
      style={{ height: '5px' }}
      variant="determinate"
      value={failureBar}
      color="secondary"
    />
  </>
);

export default memo(ProgressBar);
