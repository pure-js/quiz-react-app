import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Textarea.css';

class TextArea extends Component {
  static hasScrollbar(el) {
    return el.clientHeight < el.scrollHeight;
  }

  static addRow(event) {
    const { target } = event;
    if (TextArea.hasScrollbar(target)) {
      target.rows = Number(target.rows) + 1;
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      userAnswer: '',
    };

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnswerChange(event) {
    this.setState({
      userAnswer: event.target.value,
    });
    TextArea.addRow(event);
  }

  handleSubmit() {
    this.props.userAnswer(this.state.userAnswer);
  }

  render() {
    return (
      <textarea
        id="console-output"
        value={this.userAnswer}
        onInput={this.handleAnswerChange}
        rows="2"
        className={styles.console}
      />
    );
  }
}

TextArea.propTypes = {
  userAnswer: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default TextArea;
