const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
  
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})
  
  // y carga el archivo index.html de la aplicación.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}
  
app.on('ready', createWindow)