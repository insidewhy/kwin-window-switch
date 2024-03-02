function selectNextWindow(direction) {
  // TODO: change to windowList() for plasma6
  const clientList = workspace.clientList()
  const desktop = workspace.currentDesktop
  let nextIdx = -1
  let hasActive = false

  const startPoint = direction === 1 ? 0 : clientList.length - 1
  for (let i = startPoint; (i < clientList.length && i >= 0); i += direction) {
    const client = clientList[i]
    if (client.active) {
      hasActive = true
      continue
    }

    if (client.desktop === desktop) {
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
    // TODO: change to activeWindow for plasma6
    workspace.activeClient = clientList[nextIdx]
  }
}

registerShortcut('nextWindow', 'Select next window', 'Meta+I', function() {
  selectNextWindow(1)
})

registerShortcut('prevWindow', 'Select previous window', 'Meta+H', function() {
  selectNextWindow(-1)
})
