chrome.commands.onCommand.addListener(function(command) {
    if (command.indexOf("tab-") >= 0) {
        var index = parseInt(command.charAt(command.length - 1));
        chrome.tabs.query({currentWindow: true}, function(tabs) {
            var current = tabs[index - 1];
            chrome.tabs.update(current.id, {'active': true});
        });
    }
});
