import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor({ language, value, onChange }) {

  // Match language to CodeMirror extension
  const mode = {
    html: html(),
    css: css(),
    js: javascript()
  }[language];

  return (
    <div className="editor-container">
      <CodeMirror
        value={value}
        theme="dark"
        extensions={mode ? [mode] : []}
        onChange={(val) => onChange(val)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "hidden",
        }}
        basicSetup={{
          lineNumbers: true,
          // foldGutter: true,
          highlightActiveLine: true,
        }}
      />
    </div>
  );
}
