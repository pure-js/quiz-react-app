import React, { useState } from 'react';

declare module './Textarea.css' {
  const css: any
  export default css
}
import styles from './Textarea.css';

interface Props {
  getInputValue: string,
}

const hasScrollbar = el => el.clientHeight < el.scrollHeight;

const addRow = (event: SyntheticEvent<any>) => {
  const { currentTarget } = event;
  if (hasScrollbar(currentTarget)) {
    currentTarget.rows = Number(currentTarget.rows) + 1;
  }
};

const TextArea = ({ getInputValue }: Props) => {
  const [userAnswer, setUserAnswer] = useState('');

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
