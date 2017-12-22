import React from 'react';
import PropTypes from 'prop-types';

const UserAnswer = (props) => {
  const { userAnswer, handleAnswer } = props;

  this.state = {
    userAnswer: '',
  };

  const handleAnswerChange = (event) => {
    this.setState({ userAnswer: event.target.value });
  };

  function hasScrollbar(el) {
    return (el.clientHeight < el.scrollHeight);
  }

  function addRow(event) {
    if (hasScrollbar(event.target)) {
      event.target.rows = Number(event.taget.rows) + 1;
    }
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="console-output">Web Console Output:</label>
        <textarea
          id="console-output"
          onKeyPress={addRow}
          value={userAnswer}
          onChange={handleAnswerChange}
          rows="2"
          className="form-control console-output"
        />
      </div>
      <div className="btn-group">
        <button
          id="answer"
          onClick={handleAnswer}
          type="button"
          className="btn btn-info btn_cursor"
        >Answer
        </button>
        <button
          id="next-quiz"
          onClick={handleAnswer}
          type="button"
          className="btn btn-light btn_cursor"
        >I don't know
        </button>
      </div>
    </form>
  );
};
UserAnswer.propTypes = {
  userAnswer: PropTypes.string,
  handleAnswer: PropTypes.func.isRequired,
};

UserAnswer.defaultProps = {
  userAnswer: '',
};

export default UserAnswer;
