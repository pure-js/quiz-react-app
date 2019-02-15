// @flow
import React, { useState } from 'react';

import styles from './Textarea.css';

type Props = {
  getInputValue: string,
};

const TextArea = ({ getInputValue }: Props) => {
  const [userAnswer, setUserAnswer] = useState('');

  const hasScrollbar = el => el.clientHeight < el.scrollHeight;

  const addRow = (event: SyntheticEvent<any>) => {
    const { currentTarget } = event;
    if (hasScrollbar(currentTarget)) {
      currentTarget.rows = Number(currentTarget.rows) + 1;
    }
  };

  const handleAnswerChange = (event: SyntheticEvent<any>) => {
    const { value } = event.currentTarget;
    getInputValue(value);
    setUserAnswer(value);
    addRow(event);
  };

  return (
    <textarea
      id="console-output"
      value={userAnswer}
      onChange={handleAnswerChange}
      rows="2"
      className={styles.console}
    />
  );
};

export default TextArea;
