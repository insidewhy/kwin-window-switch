.PHONY: install

install:
	kpackagetool5 --type=KWin/Script -i .
	kwriteconfig5 --file kwinrc --group Plugins --key windowswitchEnabled true
	qdbus org.kde.KWin /KWin reconfigure
