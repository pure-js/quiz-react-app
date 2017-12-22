import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: '',
    };
  }

  hasScrollbar = el => el.clientHeight < el.scrollHeight;

  addRow = (event) => {
    let target = event.target;
    if (this.hasScrollbar(target)) {
      target.rows = Number(target.rows) + 1;
    }
  };

  handleAnswerChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
    });
    this.addRow(event);
  };

  handleSubmit = () => {
    this.props.userAnswer(this.state.userAnswer, this.props.handleAnswer);
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="console-output">Web Console Output:</label>
          <textarea
            id="console-output"
            value={this.userAnswer}
            onInput={this.handleAnswerChange}
            rows="2"
            className="form-control console-output"
          />
        </div>
        <div className="btn-group">
          <button
            id="answer"
            onClick={this.handleSubmit}
            type="button"
            className="btn btn-info btn_cursor"
          >Answer
          </button>
          <button
            id="next-quiz"
            onClick={this.handleSubmit}
            type="button"
            className="btn btn-light btn_cursor"
          >I don't know
          </button>
        </div>
      </form>
    );
  }
}
UserAnswer.propTypes = {
  userAnswer: PropTypes.func,
  handleAnswer: PropTypes.func.isRequired,
};

export default UserAnswer;
