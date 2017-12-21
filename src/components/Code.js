import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';


class Code extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="col-12 bg-solarized">
        <pre className="language_custom">
          <code id="code" className="language-javascript">
            {this.props.question}
          </code>
        </pre>
      </div>
    );
  }
}
Code.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Code;