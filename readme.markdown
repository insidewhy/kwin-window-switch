# Installation

```bash
git clone https://github.com/insidewhy/kwin-window-switch
cd kwin-window-switch
make install
```

## Motivation

The default KDE window switcher involves a "tab box" mode which blocks all further key bindings until the modifier key is removed. This script switches windows immediately without blocking key bindings.

## Customising the keybindings

After installing this script the keybindings can be customised in the "global shortcuts" settings under the `KWin` component via `Select next window` and `Select previous window`.

## History

This was original written in QML where two of the needed APIs weren't available. The fixes to these are now in KDE, the relevant bugs can be found below:
 * [workspace.clientList does not work in declarative script](https://bugs.kde.org/show_bug.cgi?id=340225)
 * [registerShortcut does not work in declarative script](https://bugs.kde.org/show_bug.cgi?id=340125)
