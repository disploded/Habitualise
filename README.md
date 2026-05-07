# Habitualise

Hourly habit tracking that resets itself.

Habitualise is a lightweight desktop app designed to help you build consistency by resetting your task list every hour. 
This interval is one hour by default, but can be configured by the user in the settings.

✨ Features
Interval Resets: Tasks automatically clear every interval.

Desktop Notifications: Get a nudge when the reset is up.

Always on Top: Unless minimized, you can keep your goals in sight.

🚀 How to Install & Run
Download: Go to the Releases page and download Habitualise 1.0.0.exe.

Move: Move the .exe from your Downloads folder to a permanent home (like Documents or an Apps folder).

Launch: Double-click the file to start tracking.

Since this is a portable app, it doesn't automatically add itself to your Windows Startup.


🛠️ For Developers
If you want to run this project locally:

Bash
# Clone the repository
git clone https://github.com/disploded/Habitualise.git

# Install dependencies
npm install

# Run the app in development mode
npm start

# Build the portable EXE
npx electron-builder
