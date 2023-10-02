const {app, BrowserWindow} = require('electron')
const path = require('path')

function generateBrowserWindow(){
    const window = new BrowserWindow({
        width: 1400,
        height: 1200
    })

    window.loadFile(path.join(__dirname, 'src', 'view', 'home', 'home.html'))
}

app.whenReady()
.then(()=>{
    generateBrowserWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

// Stuff Windows & Linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})