function selectNextWindow(direction) {
  const windowList = workspace.windowList()
  const desktop = workspace.currentDesktop
  let nextIdx = -1
  let hasActive = false

  const startPoint = direction === 1 ? 0 : windowList.length - 1
  for (let i = startPoint; (i < windowList.length && i >= 0); i += direction) {
    const win = windowList[i]
    if (win.desktopWindow) {
      continue
    }
    if (win.active) {
      hasActive = true
      continue
    }

    if (win.desktops.includes(desktop)) {
      if (hasActive) {
        nextIdx = i
        break
      }
      else if (nextIdx === -1) {
        // default to wrap around
        nextIdx = i
      }
    }
  }

  if (nextIdx !== -1) {
    workspace.activeWindow = windowList[nextIdx]
  }
}

registerShortcut('nextWindow', 'Select next window', 'Meta+I', function() {
  selectNextWindow(1)
})

registerShortcut('prevWindow', 'Select previous window', 'Meta+H', function() {
  selectNextWindow(-1)
})
