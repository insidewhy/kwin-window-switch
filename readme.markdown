# Installation

```bash
git clone https://github.com/ohjames/kwin-window-switch
cd kwin-window-switch
plasmapkg2 -t kwinscript -i .
```

## Motivation

The default KDE window switcher involves a "tab box" mode which blocks all further key bindings until the modifier key is removed. This script switches windows immediately without blocking key bindings.

## Customising the keybindings

After installing this script the keybindings can be customised in the "global shortcuts" settings under the `KWin` component via `Select next window` and `Select previous window`.

## Dependencies

This script depends on two patches I have made against KDE that are currently in review. See:
 * [workspace.clientList does not work in declarative script](https://bugs.kde.org/show_bug.cgi?id=340225)
 * [registerShortcut does not work in declarative script](https://bugs.kde.org/show_bug.cgi?id=340125)

A copy of kwin with both patches can be retrieved from [my github fork of kwin here](https://github.com/ohjames/kwin/tree/scripting-fixes):
