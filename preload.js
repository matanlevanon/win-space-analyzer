'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Returns the drive list with total/free/used
  listDrives: () => ipcRenderer.invoke('list-drives'),

  // Starts scanning a path; resolves { ok, tree } when done
  scanStart: (rootPath) => ipcRenderer.invoke('scan-start', rootPath),

  // Cancels an active scan
  scanCancel: () => ipcRenderer.invoke('scan-cancel'),

  // Opens an item in Windows Explorer (highlighted in its folder)
  openInExplorer: (targetPath) => ipcRenderer.invoke('open-in-explorer', targetPath),

  // Saving/loading scans
  saveScan: (payload) => ipcRenderer.invoke('save-scan', payload),
  listScans: () => ipcRenderer.invoke('list-scans'),
  loadScan: (driveId) => ipcRenderer.invoke('load-scan', driveId),
  loadPrevScan: (driveId) => ipcRenderer.invoke('load-prev-scan', driveId),

  // Scan progress listener
  onScanProgress: (callback) => {
    const listener = (_evt, data) => callback(data);
    ipcRenderer.on('scan-progress', listener);
    return () => ipcRenderer.removeListener('scan-progress', listener);
  },

  // Language - keeps the tray menu in sync with the UI language
  setLanguage: (lang) => ipcRenderer.invoke('set-language', lang),

  // Version & updates
  getVersion: () => ipcRenderer.invoke('get-version'),
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  downloadUpdate: () => ipcRenderer.invoke('download-update'),
  installUpdate: () => ipcRenderer.invoke('install-update'),
  onUpdateStatus: (callback) => {
    const listener = (_evt, data) => callback(data);
    ipcRenderer.on('update-status', listener);
    return () => ipcRenderer.removeListener('update-status', listener);
  }
});
