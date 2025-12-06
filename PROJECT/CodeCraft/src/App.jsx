import { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  const [srcDoc, setSrcDoc] = useState("");

  const [openHtml, setOpenHtml] = useState(true);
  const [openCss, setOpenCss] = useState(true);
  const [openJs, setOpenJs] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}<\/script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="app">

      {/* ---------- TOP PANEL ---------- */}
      <div className="top-pane">

        {/* ---------- HTML PANEL ---------- */}
        <div className={`editor-wrapper ${openHtml ? "" : "collapsed"}`}>
          <div className="editor-header">

            <span className="label">
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </span>

            <button onClick={() => setOpenHtml(!openHtml)}>
              <FontAwesomeIcon icon={openHtml ? faCompress : faExpand} />
            </button>
          </div>

          <div className="editor-container">
            <Editor language="html" value={html} onChange={setHtml} />
          </div>
        </div>

        {/* ---------- CSS PANEL ---------- */}
        <div className={`editor-wrapper ${openCss ? "" : "collapsed"}`}>
          <div className="editor-header">

            <span className="label">
              <FontAwesomeIcon icon={faCss3Alt} /> CSS
            </span>

            <button onClick={() => setOpenCss(!openCss)}>
              <FontAwesomeIcon icon={openCss ? faCompress : faExpand} />
            </button>
          </div>

          <div className="editor-container">
            <Editor language="css" value={css} onChange={setCss} />
          </div>
        </div>

        {/* ---------- JS PANEL ---------- */}
        <div className={`editor-wrapper ${openJs ? "" : "collapsed"}`}>
          <div className="editor-header">

            <span className="label">
              <FontAwesomeIcon icon={faJs} /> JS
            </span>

            <button onClick={() => setOpenJs(!openJs)}>
              <FontAwesomeIcon icon={openJs ? faCompress : faExpand} />
            </button>
          </div>

          <div className="editor-container">
            <Editor language="js" value={js} onChange={setJs} />
          </div>
        </div>

      </div>

      {/* ---------- OUTPUT PREVIEW ---------- */}
      <div className="bottom-pane">
        <div className="preview-wrap">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

    </div>
  );
}
