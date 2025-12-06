import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor({ language, value, onChange }) {

  // MUST match exactly the language prop you pass
  const mode = {
    html: html(),
    css: css(),
    js: javascript(),
    javascript: javascript()
  }[language]; // <- this prevents undefined

  return (
    <div className="editor-container">
      <CodeMirror
        value={value}
        height="100%"
        theme="dark"
        extensions={mode ? [mode] : []}  // <- protects from undefined
        onChange={(val) => onChange(val)}
      />
    </div>
  );
}
