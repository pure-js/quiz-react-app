/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { Link } from 'wouter';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Textarea from '../Textarea/Textarea';

import button from '../button.css';
import styles from './Form.css';

let data = '';

const getValue = (value) => {
  data = value;
};

const UserAnswer = ({ userAnswer }) => (
  <form>
    <div>
      <label className={styles['console-label']} htmlFor="console-output">
        Web Console Output:
      </label>
      <div className={styles.console_icon}>{'>'}</div>
      <Textarea getInputValue={getValue} />
      <label>
        Enter key starting a new line. Please note that your input is case
        sensitive.
      </label>
    </div>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button
        id="answer"
        onClick={() => userAnswer(data)}
        type="button"
        className={`${button.btn_cursor}`}
      >
        Answer
      </Button>
      <Button
        id="next-quiz"
        onClick={() => userAnswer(data)}
        type="button"
        className={`${button.btn_cursor}`}
      >
        I don't know
      </Button>
      <Button
        href="/results"
        component={React.forwardRef((props, ref) => (
          <Link {...props} ref={ref} />
        ))}
      >
        See results
      </Button>
    </ButtonGroup>
  </form>
);

export default memo(UserAnswer);
