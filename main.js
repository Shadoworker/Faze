
const {app, BrowserWindow, Menu, remote , ipcMain, dialog} = require('electron')

// Module to control application life.
const ipc = ipcMain;
// const _remote = require('electron').remote;

// const BrowserWindow2 = require('electron').remote.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
  let prevWidth = 434;
  let prevHeight = 459;

var mainWindow, preload, prewind

function createWindow () {
  // Create the browser window.
  const screen = require('electron').screen;
  const electronScreen = screen;

  const size = electronScreen.getPrimaryDisplay().size;
  


  mainWindow = new BrowserWindow(
    {show:false, 
     minWidth: 768,
     minHeight: 576,
     width:(size.width - 80),
     height:(size.height - 80),
     movable:true,
     resizable:true,
     title:'Faze - Game Engine',
     icon:'./assets/app_icon.png',
     frame: false})

  // preload = new BrowserWindow({show:false,parent: mainWindow,width: prevWidth+270, height: prevHeight+40, alwaysOnTop:false,resizable:false,frame: false,transparent:true,modal : true,movable:true});
  // prewind = new BrowserWindow({show:false,parent: mainWindow,width: prevWidth, height: prevHeight, alwaysOnTop:false,resizable:false,frame: false,transparent:true,modal : true});
  
  // preload.loadURL(`file://${__dirname}/views/preload.html`)

  // prewind.loadURL(`file://${__dirname}/views/home.html`)
  
  // and load the index.html of the app.
   mainWindow.loadURL(`file://${__dirname}/views/index.html`)

   // mainWindow.hide();
    
  //Avoiding flash before showing
   mainWindow.once('ready-to-show', () => {
   
      mainWindow.show();
      // prewind.hide();

     })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
   // console.log(BrowserWindow.getFocusedWindow())
   // console.log(app)

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  
 mainWindow.on('resize' , () =>{

   prevWidth = mainWindow.getSize()[0];
   prevHeight = mainWindow.getSize()[1];

 })

// if(mainWindow.isFullScreen())
// {
//   alert('I fullooo !') ;
// }




}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


/////////////////// FUNCTIONS ////////////////////
 
  function _minimize(){
    BrowserWindow.getFocusedWindow().minimize();  
  }

  function _maximize(){
    BrowserWindow.getFocusedWindow().maximize();  
  
  }

  function _reset(){

    BrowserWindow.setSize(prevWidth, prevHeight) ; 
  
  }

  function _close(){
    BrowserWindow.getFocusedWindow().close();  
  }


  function _showMain(){
    mainWindow.show();  
    preload.close();
  }

  function _showPreload(){
    preload.show();  
    prewind.close();
  }


  function _closeAll(){
    app.quit(); 
  }

////////////////////////////////////////////////

ipc.on('minimize-me', () => {_minimize();});
ipc.on('maximize-me', () => {
  
  if (mainWindow.isFullScreen())
   {
    _reset();
   }
   else
   {
    _maximize();
   }
  });


ipc.on('close-me', () => {_close();});
ipc.on('closeAll', () => {_closeAll();});
ipc.on('showPreload', () => {_showPreload();});
ipc.on('showMain', () => {_showMain();});








ipc.on('create_newfile_request', (e) =>{

  e.sender.send('create_newfile_response');

});

/////  PROJECT CREATION PATH /////

ipc.on('open_project_creation_path', function (event) {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
  }, function (files) {
    if (files) event.sender.send('selected_project_creation_path', files)
  })
});

//////////////////////////////


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
 