🌐 Online Code Editor

A modern CodePen-style HTML, CSS & JavaScript editor built using React + Vite + CodeMirror 6.

<p align="center"> <img src="public/logo.svg" width="140" /> </p> <p align="center"> <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite" /> <img src="https://img.shields.io/badge/CodeMirror-6-darkgreen?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p>
🚀 Live Demo

👉 Add your deployed link here (Netlify / Vercel)

https://your-code-editor-demo.netlify.app

🎬 Animated Demo (GIFs)

Place your GIFs inside /gifs/ folder and replace paths below.

📝 Typing in the Editor

⚡ Live Rendering

🎛 Collapse / Expand Panels

💾 Auto Save to LocalStorage

📸 Screenshots

Add .png images inside /screenshots/.

✨ Full Editor UI

✨ Preview Panel

✨ Features
Feature	Description
📝 HTML/CSS/JS Editor	Powered by CodeMirror 6
⚡ Live Preview	Updates in real time
💾 Auto Save	Stored in LocalStorage
🎛 Expand / Collapse	Individual editor sections
🎨 Icons	React Icons / FontAwesome
🌓 Dark UI	Beautiful modern theme
🔐 Sandbox Mode	Safe JS execution inside iframe
🎯 Lightweight	Built with Vite for max performance
🧩 Tech Stack
<p align="left"> <img src="https://img.shields.io/badge/React-19-blue?logo=react" /> <img src="https://img.shields.io/badge/Vite-5-purple?logo=vite" /> <img src="https://img.shields.io/badge/CodeMirror-6-success" /> <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" /> <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" /> </p>
📂 Folder Structure
src/
│── Components/
│   └── Editor.jsx            # CodeMirror wrapper
│
│── hooks/
│   └── useLocalStorage.js    # Auto-save hook
│
│── App.jsx                   # Main editor layout
│── App.css                   # Styling (dark mode UI)
│── main.jsx                  # App entry point
│
└── public/logo.svg           # Project logo

⚙️ Installation
1️⃣ Clone repository
git clone https://github.com/your-username/code-editor.git
cd code-editor

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev

Access the project:
http://localhost:5173

🛠 Build
npm run build


Output will be in the /dist folder.

☁️ Deployment
🚀 Deploy to Netlify
npm run build


Then drag the /dist folder into Netlify.

OR:

netlify deploy

🚀 Deploy to Vercel
npm install -g vercel
vercel

🔐 Security Notes

The preview is rendered using:

sandbox="allow-scripts allow-same-origin"


✔ Required for live preview
✔ Safe for self-written code
❌ Do NOT load third-party external URLs

🧠 How It Works (Core Logic)
Live Preview Engine
setSrcDoc(`
  <html>
    <style>${css}</style>
    <body>${html}</body>
    <script>${js}<\/script>
  </html>
`);

Persistent Data
const [html, setHtml] = useLocalStorage("html", "");

CodeMirror Setup
<CodeMirror
  value={value}
  extensions={[html(), css(), javascript()]}
  theme="dark"
  onChange={onChange}
/>

🤝 Contributing

Fork this repo

Create a new branch

Commit your changes

Open a Pull Request

🧹 Changelog
v1.0.0

✔ CodeMirror 6
✔ HTML/CSS/JS live preview
✔ LocalStorage auto save
✔ Collapsible panels
✔ Icon UI
✔ GIF demo included
✔ Project logo added