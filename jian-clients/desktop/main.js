const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let win = null;
let tray = null;

app.whenReady().then(() => {
  win = new BrowserWindow({ 
    width: 450, 
    height: 700, 
    show: false,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  
  win.loadURL('http://localhost:8765');
  
  tray = new Tray(path.join(__dirname, 'icon.png'));
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Show Jian', click: () => win.show() },
    { label: 'Quit', click: () => app.quit() }
  ]));
  tray.on('click', () => win.show());
});
