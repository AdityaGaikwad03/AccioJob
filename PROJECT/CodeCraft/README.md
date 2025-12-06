🌐 CodeCraft — Online HTML/CSS/JS Editor

A sleek, fast, and modern CodePen-style online code editor built with React, Vite, and CodeMirror 6.
Designed for developers who want instant output, clean UI, and powerful features like autosave, collapsible panels, and mobile-friendly editing.

<p align="center"> <img src="public/logo.svg" width="140" /> </p> <p align="center"> <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite" /> <img src="https://img.shields.io/badge/CodeMirror-6-darkgreen?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p>
🚀 Live Demo

👉 https://codecraft-app.vercel.app/

✨ Features
🧑‍💻 Editor Functionality

Separate HTML, CSS, and JavaScript editors

Built using CodeMirror 6 for a smooth coding experience

Auto-run preview updates output in real time

Collapsible editor panels

Mobile-friendly tab switching (HTML / CSS / JS)

💾 Storage & Code Management

Auto-save via LocalStorage

Manual Save button with success popup

Load Previous Code anytime

Reset All Editors with one click

📱 UI & Responsiveness

Fully responsive layout

Mobile-first panel switching

Clean dark-themed interface

FontAwesome icons for HTML, CSS, JS, and controls

🔐 Output Preview

Real-time iframe preview

Safe execution using:

sandbox="allow-scripts"

🧠 How It Works
🔄 Live Auto Preview

A 300ms debounce prevents excessive renders:

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

💾 Save Code
const handleSave = () => {
  localStorage.setItem("html", html);
  localStorage.setItem("css", css);
  localStorage.setItem("js", js);

  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 2000);
};

📂 Load Saved Code
const handleLoad = () => {
  setHtml(localStorage.getItem("html") || "");
  setCss(localStorage.getItem("css") || "");
  setJs(localStorage.getItem("js") || "");
};

🗑️ Reset Everything
const handleReset = () => {
  setHtml("");
  setCss("");
  setJs("");
};

📱 Mobile Editing (Tabs)

Switch between HTML, CSS, and JS:

<div className="mobile-tabs">
  <button onClick={() => setActivePanel("html")}>HTML</button>
  <button onClick={() => setActivePanel("css")}>CSS</button>
  <button onClick={() => setActivePanel("js")}>JS</button>
</div>

🔧 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/AdityaGaikwad03/AccioJob
cd PROJECT/codeeditor

2️⃣ Install dependencies
npm install

3️⃣ Run dev server
npm run dev


Visit:
👉 http://localhost:5173

📂 Folder Structure
src/
│── Components/
│   ├── Editor.jsx
│   ├── NavBar.jsx
│   └── (new components can be added)
│
│── hooks/
│   └── useLocalStorage.js
│
│── App.jsx          # Main application logic
│── App.css          # Styling & layout
│── main.jsx         # Entry point
│
└── public/logo.svg

☁️ Deployment
🚀 Deploy to Netlify
npm run build
netlify deploy

🚀 Deploy to Vercel
npm i -g vercel
vercel

📌 Changelog
v1.2.0

Added mobile tabs

Added save/load/reset functionality

Added save success popup

Improved live preview debounce

Enhanced UI design & responsiveness

🤝 Contributing

Fork the repo

Create a feature branch

Commit changes

Open a Pull Request
