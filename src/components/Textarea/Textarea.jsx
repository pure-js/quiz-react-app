// @flow
import React, { Component } from 'react';

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
  }

  handleAnswerChange(event) {
    const { value } = event.target;
    this.props.getInputValue(value);

    this.setState({
      userAnswer: value,
    });
    TextArea.addRow(event);
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

export default TextArea;
