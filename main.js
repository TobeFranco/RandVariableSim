const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600, show: false })

  // y carga el archivo index.html de la aplicación.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'pages', 'home-page', 'home-page.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('ready-to-show', () => {
    win.show();
  })

  win.on('closed', () => {
    app.exit();
  })
}

ipcMain.on('open-page', (event, page) => {
  let nWin = new BrowserWindow({ width: 1200, height: 600, show: false })
  nWin.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'pages', page, page + '.html'),
    protocol: 'file:',
    slashes: true
  }))
  nWin.on('ready-to-show', () => {
    nWin.show()
  })
  nWin.on('closed', () => {
    nWin = null
  })
})

app.on('ready', createWindow)