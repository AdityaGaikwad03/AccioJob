import { useState, useEffect } from "react";
import Editor from "./Components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from "./Components/NavBar";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  const [srcDoc, setSrcDoc] = useState("");

  const [openHtml, setOpenHtml] = useState(true);
  const [openCss, setOpenCss] = useState(true);
  const [openJs, setOpenJs] = useState(true);

  // Mobile active panel
  const [activePanel, setActivePanel] = useState("html");

  const [showPopup, setShowPopup] = useState(false);

  // Auto-run output preview
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}<\/script>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // RUN → scroll to output
  // const handleRun = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth"
  //   });
  // };

  // RESET → clear all editors
  const handleReset = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  // SAVE → save code to localStorage manually (or download later)
  const handleSave = () => {
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);

    setShowPopup(true);

    // Auto hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };
const handleLoad = () => {
  setHtml(localStorage.getItem("html") || "");
  setCss(localStorage.getItem("css") || "");
  setJs(localStorage.getItem("js") || "");
};
  return (
    <div className="app">
      <Navbar
        // onRun={handleRun}
        onReset={handleReset}
        onSave={handleSave}

  onLoad={handleLoad}
      />

      {/* ---- MOBILE TABS ---- */}
      <div className="mobile-tabs">
        <button onClick={() => setActivePanel("html")}>
          <FontAwesomeIcon className="icon-html" icon={faHtml5} /> HTML
        </button>

        <button onClick={() => setActivePanel("css")}>
          <FontAwesomeIcon className="icon-css" icon={faCss3Alt} /> CSS
        </button>

        <button onClick={() => setActivePanel("js")}>
          <FontAwesomeIcon className="icon-js" icon={faJs} /> JS
        </button>
      </div>

      {/* ---- TOP PANELS (HTML / CSS / JS) ---- */}
      <div className="top-pane">
        {/* HTML PANEL */}
        <div
          className={`panel ${openHtml ? "" : "collapsed"} 
          ${activePanel === "html" ? "active-panel" : ""}`}
        >
          <div className="panel-header">
            <span>
              <FontAwesomeIcon className="icon-html" icon={faHtml5} /> HTML
            </span>

            <button onClick={() => setOpenHtml(!openHtml)}>
              <FontAwesomeIcon
                className={`collapse-icon ${openHtml ? "open" : "closed"}`}
                icon={openHtml ? faChevronUp : faChevronDown}
              />
            </button>
          </div>

          <Editor language="html" value={html} onChange={setHtml} />
        </div>

        {/* CSS PANEL */}
        <div
          className={`panel ${openCss ? "" : "collapsed"} 
          ${activePanel === "css" ? "active-panel" : ""}`}
        >
          <div className="panel-header">
            <span>
              <FontAwesomeIcon className="icon-css" icon={faCss3Alt} /> CSS
            </span>

            <button onClick={() => setOpenCss(!openCss)}>
              <FontAwesomeIcon
                className={`collapse-icon ${openCss ? "open" : "closed"}`}
                icon={openCss ? faChevronUp : faChevronDown}
              />
            </button>
          </div>

          <Editor language="css" value={css} onChange={setCss} />
        </div>

        {/* JS PANEL */}
        <div
          className={`panel ${openJs ? "" : "collapsed"} 
          ${activePanel === "js" ? "active-panel" : ""}`}
        >
          <div className="panel-header">
            <span>
              <FontAwesomeIcon className="icon-js" icon={faJs} /> JS
            </span>

            <button onClick={() => setOpenJs(!openJs)}>
              <FontAwesomeIcon
                className={`collapse-icon ${openJs ? "open" : "closed"}`}
                icon={openJs ? faChevronUp : faChevronDown}
              />
            </button>
          </div>

          <Editor language="js" value={js} onChange={setJs} />
        </div>
      </div>

      {/* ---- OUTPUT PREVIEW ---- */}
      <div className="bottom-pane">
        <iframe srcDoc={srcDoc} sandbox="allow-scripts" title="output" />
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-box">✔ Code Saved Successfully!</div>
        </div>
      )}
    </div>
  );
}
