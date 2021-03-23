import React, { useState } from 'react';

import styles from './Textarea.css';

const hasScrollbar = (el) => el.clientHeight < el.scrollHeight;

const addRow = (event) => {
  const { currentTarget } = event;
  if (hasScrollbar(currentTarget)) {
    currentTarget.rows = Number(currentTarget.rows) + 1;
  }
};

const TextArea = ({ getInputValue }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswerChange = (event) => {
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
      rows={2}
      className={styles.console}
    />
  );
};

export default TextArea;
