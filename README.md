# 🕒 Habitualise
> **The High-Intensity Habit Tracker.**  
> *Build consistency through hourly resets.*

[![Status](https://img.shields.io/badge/Status-Version%201.0.0-blue.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Windows-lightgrey.svg)]()
[![Built With](https://img.shields.io/badge/Built%20With-Electron%20%7C%20Node.js-6ea4e2.svg)]()

---

### 💡 The Problem
Traditional to-do lists grow indefinitely, leading to "productivity debt." **Habitualise** solves this by providing a strict time-box. It’s designed for users who want to maintain high focus on frequent habits, like posture checks, hydration, or quick stretching.

### ✨ Key Features
*   ♻️ **Auto-Reset Engine:** Tasks automatically clear every 60 minutes to provide a "clean slate". Interval is 60 minutes by default, but can be configured but the user.
*   🔔 **Smart Notifications:** Windows desktop alerts nudge you when the hour is up.
*   🖥️ **Seamless UI:** A frameless, "Always-on-Top" design ensures your goals stay in sight. Can minimize window if necessary.

---

### 🛠️ Tech Stack
*   **Framework:** Electron (Desktop Integration)
*   **Frontend:** HTML5, CSS3, JavaScript
*   **Backend:** Node.js
*   **Persistence:** `electron-store` (Local JSON storage)

---

### 🚀 Quick Start
1.  **Download:** Grab the latest `Habitualise 1.0.0.exe` from the [Releases](https://github.com/disploded/Habitualise/releases) page.
2.  **Run:** Double-click the file.
3.  **Startup (Recommended):** To keep your habits consistent, add the app to your Windows Startup:
    *   Right-click the `.exe` → **Create Shortcut**.
    *   Press `Win + R`, type `shell:startup`, and hit Enter.
    *   Drag your shortcut into that folder.

---

### 👨‍💻 Local Development
If you want to tweak the logic or contribute:
```bash
# Clone the project
git clone [https://github.com/disploded/Habitualise.git](https://github.com/disploded/Habitualise.git)

# Install dependencies
npm install

# Run in dev mode
npm start

# Package for Windows
npx electron-builder
