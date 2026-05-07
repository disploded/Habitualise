const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getTasks: () => ipcRenderer.invoke('get-tasks'),
    saveTasks: (tasks) => ipcRenderer.invoke('save-tasks', tasks),
    changePage: (pageName) => ipcRenderer.send('change-page', pageName),
    quitApp: () => ipcRenderer.send('quit-app'),
});