// @flow
import React, { Component } from 'react';

import styles from './Textarea.css';

type Props = {
  getInputValue: string,
};

type State = {
  userAnswer: string,
};

class TextArea extends Component<Props, State> {
  static hasScrollbar(el) {
    return el.clientHeight < el.scrollHeight;
  }

  static addRow(event) {
    const { target } = event;
    if (TextArea.hasScrollbar(target)) {
      target.rows = Number(target.rows) + 1;
    }
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      userAnswer: '',
    };
  }

  handleAnswerChange = (event) => {
    const { value } = event.target;
    this.props.getInputValue(value);

    this.setState({
      userAnswer: value,
    });
    TextArea.addRow(event);
  };

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
