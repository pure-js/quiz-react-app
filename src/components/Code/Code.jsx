// @flow
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!prismjs/themes/prism-solarizedlight.css';

import styles from './Code.css';

class Code extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className={classNames(bootstrap['bg-solarized'])}>
        <pre className={styles.language_custom}>
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
