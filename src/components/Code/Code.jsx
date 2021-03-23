import React, { memo } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './Code.css';

SyntaxHighlighter.registerLanguage('javascript', js);

const Code = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={solarizedLight}>{codeString}</SyntaxHighlighter>
);

export default memo(Code);
