# Chatastrophe

> **"Your chats are disaster and we fix them."**

Chatastrophe is an AI micro-app designed to help users understand and catch up on what they missed in long, unread chat conversations.

This repository represents **Stage 1** of development: a modern, responsive, modular frontend built with **React**, **Vite**, and **plain CSS**, using the signature pastel design system.

---

## 🎨 Design System & Palette

The user interface uses the project's signature **pastel colour palette**:
- **Background**: Soft Sage Pastel (`#dfe6e1`) with radial lighting gradient
- **Primary Accents**: Mint Pastel (`#73f0d6`) & Seafoam Mint (`#35d7af`)
- **Typography**: Deep Slate Forest (`#0f2a2d`) & Muted Teal (`#254a4d`)
- **Surfaces**: Frosted glassmorphism cards (`rgba(255, 255, 255, 0.72)`), subtle borders (`rgba(15, 42, 45, 0.12)`), soft glowing hover states, and accessible high-contrast focus rings (`#169375`).

---

## 🚀 Getting Started (Beginner Guide)

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or newer).

### 1. Install Dependencies

Open your terminal or command prompt in the project root folder and run:

```bash
npm install
```

*(Note for Windows PowerShell users: If script execution policies restrict `.ps1` files, use `npm.cmd install` or run in Command Prompt / Git Bash).*

### 2. Start the Development Server

Start Vite's development server with hot-module replacement:

```bash
npm run dev
```
*(or `npm.cmd run dev`)*

You will see output indicating the local server URL (usually `http://localhost:5173`). Open that URL in your browser to explore the app!

### 3. Build for Production (Optional)

To verify or create an optimized production build:

```bash
npm run build
```

The compiled files will be generated in the `dist/` directory.

---

## 📁 Project Structure

```text
chatastrophe/
├── index.html                  # Vite HTML entry point for the React application
├── index.legacy.html           # Preserved backup of original static landing page
├── analyze.html                # Preserved static analyzer prototype
├── history.html                # Preserved static history prototype
├── app.js                      # Preserved vanilla JavaScript script
├── styles.css                  # Original palette and styling stylesheet
├── package.json                # Project dependencies & scripts (React, Vite, React Router)
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules for node_modules & build artifacts
├── README.md                   # Project documentation & setup instructions
└── src/
    ├── main.jsx                # React DOM root entry point
    ├── App.jsx                 # Top-level application shell with React Router routes
    ├── App.css                 # Modular layout, card animations, and responsive CSS
    ├── index.css               # Global styles, pastel CSS variables, and focus styling
    ├── components/
    │   ├── Navbar.jsx          # Accessible header with brand mark & page navigation
    │   └── FeatureCard.jsx     # Reusable large card with SVG icons, hover lift, & glow
    └── pages/
        ├── Home.jsx            # Homepage with exact tagline & 4 large feature cards
        ├── SummarizePage.jsx   # /summarize route with explanation & Stage 2 placeholder
        ├── UrgentNewsPage.jsx  # /urgent-news route with explanation & Stage 2 placeholder
        ├── DecisionsPage.jsx   # /decisions route with explanation & Stage 2 placeholder
        └── ActionItemsPage.jsx # /action-items route with explanation & Stage 2 placeholder
```

---

## 🧭 Core Feature Pages (Stage 1 Navigation)

1. **Summarize Chats (`/summarize`)**: High-level briefings from lengthy conversations.
2. **Urgent News (`/urgent-news`)**: Highlights critical blockers, deadlines, and alerts.
3. **Decisions (`/decisions`)**: Highlights agreements, consensus, and team resolutions.
4. **Action Items (`/action-items`)**: Captures todos, deliverables, and assignees.

---

## 🔒 Stage 1 Scope & Constraints

- **No external AI APIs or paid keys** are used at this stage.
- **No authentication, databases, or tracking** are present.
- **Privacy First**: No conversation text is sent across any network.
