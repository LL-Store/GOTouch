module.exports = function (win, filePath) {

    setTimeout(() => {
        win.webContents.send("reset-nav", {
            url: filePath.replace(/#/g, "%23")
        });

    }, 1000);
};