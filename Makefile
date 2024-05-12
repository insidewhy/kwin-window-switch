.PHONY: install

install:
	kpackagetool6 --type=KWin/Script -i .
	kwriteconfig6 --file kwinrc --group Plugins --key windowswitchEnabled true
	qdbus org.kde.KWin /KWin reconfigure
