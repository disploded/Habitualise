const { app, BrowserWindow, screen, ipcMain, Notification } = require('electron');
const path = require('path');
const Store = require('electron-store');

const store = new Store.default();

let resetTimer;

function startTaskTimer() {
    if (resetTimer) clearInterval(resetTimer);

    const minutes = store.get('resetInterval') || 60;
    const ms = minutes * 60000;

    resetTimer = setInterval(() => {
        const tasks = store.get('tasks') || [];
        const resetTasks = tasks.map(t => ({...t, done: false}));
        store.set('tasks', resetTasks);

        new Notification({title: "Habitualise", body: "Tasks reset!"}).show();

        BrowserWindow.getAllWindows().forEach(win => win.reload());
    }, ms)
}

ipcMain.handle('get-tasks', () => {
    const savedTasks = store.get('tasks');

    if (!savedTasks) { //first time run
        return [
            { task: 'Write new tasks', done: false },
            { task: 'Check edit page', done: false }
        ];
    }
    
    return savedTasks;
});

ipcMain.handle('get-interval', () => store.get('resetInterval'));
ipcMain.on('save-setting', (event, data) => {
    store.set(data.key, data.value)
    
    if (data.key === 'resetInterval') {
        startTaskTimer();
    }
})

ipcMain.handle('save-tasks', (event, newTasks) => {
    store.set('tasks', newTasks);
    return { success: true }
})

ipcMain.on('update-timer', () => {
    startTaskTimer();
});

ipcMain.on('change-page', (event, pageName) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.loadFile(pageName)
})

ipcMain.on('minimize-app', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.minimize();
})

ipcMain.on('quit-app', () => {
    app.quit();
})

try {
  require('electron-reloader')(module);
} catch (_) {} //remove from publish

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const windowWidth = 400;
    const windowHeight = 500;

    const win = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,

        //set startup position of window
        x: width - windowWidth,
        y: height - windowHeight, 

        alwaysOnTop: true,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();
    startTaskTimer();

    // startup 
    app.setLoginItemSettings({
        openAtLogin: true,
        path: app.getPath('exe'),
    })
})