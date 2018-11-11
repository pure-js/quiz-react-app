// @flow
import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import solarizedLight from 'react-syntax-highlighter/dist/styles/hljs/solarized-light';

// import styles from './Code.css';

registerLanguage('javascript', js);

type Props = {
  question: string,
};

function Code(props: Props) {
  return <SyntaxHighlighter language="javascript" style={solarizedLight}>{props.question}</SyntaxHighlighter>;
}

export default Code;
