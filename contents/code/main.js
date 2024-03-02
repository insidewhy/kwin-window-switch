function selectNextWindow(direction) {
  var clientList = workspace.clientList()
  var client
  var desktop = workspace.currentDesktop
  var nextIdx = -1
  var hasActive = false

  var startPoint = direction === 1 ? 0 : clientList.length - 1
  for (var i = startPoint; (i < clientList.length && i >= 0); i += direction) {
    client = clientList[i]
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
    workspace.activeClient = clientList[nextIdx]
  }
}

registerShortcut('nextWindow', 'Select next window', 'Meta+I', function() {
  selectNextWindow(1)
})

registerShortcut('prevWindow', 'Select previous window', 'Meta+H', function() {
  selectNextWindow(-1)
})
