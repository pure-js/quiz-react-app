import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Textarea from '../../components/Textarea/Textarea';

import button from '../button.css';
import styles from './Form.css';

class UserAnswer extends Component {
  constructor(props) {
    super(props);
    this.data = '';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  getValue(value) {
    this.data = value;
  }

  handleSubmit() {
    this.props.userAnswer(this.data);
  }

  render() {
    return (
      <form>
        <div className={bootstrap['form-group']}>
          <label className={styles['console-label']} htmlFor="console-output">
            Web Console Output:
          </label>
          <div
            className={styles.console_icon}
          >{'>'}
          </div>
          <Textarea getInputValue={this.getValue} />
          <label>
            Enter key starting a new line.
            Please note that your input is case sensitive.
          </label>
        </div>
        <div className={classNames(bootstrap['form-group'], bootstrap['btn-group'])}>
          <button
            id="answer"
            onClick={this.handleSubmit}
            type="button"
            className={classNames(bootstrap.btn, bootstrap['btn-info'], button.btn_cursor)}
          >Answer
          </button>
          <button
            id="next-quiz"
            onClick={this.handleSubmit}
            type="button"
            className={classNames(bootstrap.btn, bootstrap['btn-light'], button.btn_cursor)}
          >{'I don\'t know'}
          </button>
        </div>
      </form>
    );
  }
}

UserAnswer.propTypes = {
  userAnswer: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default UserAnswer;
