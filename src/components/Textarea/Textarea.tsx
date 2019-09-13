import React, { useState } from 'react';

import styles from './Textarea.css';

type IProps = {
  getInputValue: () => string;
}

const hasScrollbar = (el: HTMLElement) => el.clientHeight < el.scrollHeight;

const addRow = (event: React.FormEvent<HTMLTextAreaElement>) => {
  const { currentTarget } = event;
  if (hasScrollbar(currentTarget)) {
    currentTarget.rows = Number(currentTarget.rows) + 1;
  }
};

const TextArea = ({ getInputValue }: IProps) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswerChange = (event: React.FormEvent<HTMLInputElement>) => {
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
