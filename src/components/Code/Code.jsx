import React, {memo, ReactElement} from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import solarizedLight from 'react-syntax-highlighter/dist/styles/hljs/solarized-light';

import styles from './Code.css';

SyntaxHighlighter.registerLanguage('javascript', js);

const Code = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={solarizedLight}>{codeString}</SyntaxHighlighter>
);

export default memo(Code);
