# 🚀 Bisma Shahzadi — Portfolio

A dark, modern portfolio website for a MERN Stack & AI Developer.

## 📁 Folder Structure

```
bisma-portfolio/
├── index.html          ← Main portfolio page
├── css/
│   └── style.css       ← All styles (dark neon theme)
├── js/
│   ├── firebase.js     ← Firebase config & Firestore setup
│   └── main.js         ← Animations, interactions, contact form
└── README.md           ← This file
```

## 🔥 Firebase Setup (Contact Form)

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click **"Add Project"** → Name it `bisma-portfolio`
3. Go to **Project Settings** → **Your Apps** → Click `</>` (Web App)
4. Register your app → Copy the `firebaseConfig` object
5. Open `js/firebase.js` and replace the config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. In Firebase Console → **Firestore Database** → **Create Database**
7. Choose **Start in test mode** (for now)
8. Done! Contact form will save messages to Firestore ✅

## 📸 Adding Your Photo

Replace the placeholder in `index.html`:
```html
<!-- Find this div and replace with your <img> tag -->
<div class="img-placeholder">
  ...
</div>
```
Replace with:
```html
<img src="images/bisma.jpg" alt="Bisma Shahzadi" style="width:100%; border-radius:12px;" />
```

## ➕ Adding More Projects

In `index.html`, find the `#projectsGrid` section and add a new card:

```html
<div class="project-card">
  <div class="project-top">
    <i class="fas fa-folder-open proj-folder"></i>
    <div class="project-links">
      <a href="YOUR_GITHUB_LINK" target="_blank"><i class="fab fa-github"></i></a>
    </div>
  </div>
  <h3 class="project-name">Project Name</h3>
  <p class="project-desc">Short description of your project.</p>
  <div class="project-tags"><span>React</span><span>Node.js</span></div>
</div>
```

## 🌐 Deploy for Free

### Option 1: GitHub Pages
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch
3. Your site is live at `https://bismamustafa.github.io/portfolio`

### Option 2: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your `bisma-portfolio` folder
3. Live in 30 seconds! Free custom domain available.

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo → Deploy

---
Built with ❤️ | Dark Neon Theme | Firebase Firestore
