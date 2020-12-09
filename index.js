const { app, BrowserWindow } = require('electron');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });
    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);