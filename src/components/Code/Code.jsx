/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './Code.css';

SyntaxHighlighter.registerLanguage('javascript', js);

export function Code({ codeString }) {
  return (
    <SyntaxHighlighter language="javascript" style={solarizedLight}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default memo(Code);
