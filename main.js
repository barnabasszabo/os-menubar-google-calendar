const path = require(`path`);
const { menubar } = require('menubar');

const mb = menubar({
	index: `https://calendar.google.com/`,
    browserWindow: { height: 1024, width: 800 }
});

mb.app.dock.hide();

mb.on('ready', () => {
    mb.tray.setImage( path.join(__dirname, 'tray-icon.png') );
});
