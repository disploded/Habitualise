const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');
const Store = require('electron-store');

const store = new Store.default();

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

ipcMain.handle('save-tasks', (event, newTasks) => {
    store.set('tasks', newTasks);
    return { success: true }
})

ipcMain.on('change-page', (event, pageName) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.loadFile(pageName)
})

ipcMain.on('quit-app', () => {
    app.quit();
})

try {
  require('electron-reloader')(module);
} catch (_) {} //remove from publish

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const windowWidth = 350;
    const windowHeight = 400;

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
    createWindow()
})