const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getTasks: () => ipcRenderer.invoke('get-tasks'),
    saveTasks: (tasks) => ipcRenderer.invoke('save-tasks', tasks),
    getInterval: () => ipcRenderer.invoke('get-interval'),
    saveInterval: (min) => {
        ipcRenderer.send('save-setting', {key: 'resetInterval', value: min})
        ipcRenderer.send('update-timer') // main.js restarts clock
    },
    changePage: (pageName) => ipcRenderer.send('change-page', pageName),
    minimizeApp: () => ipcRenderer.send('minimize-app'),
    quitApp: () => ipcRenderer.send('quit-app'),
});