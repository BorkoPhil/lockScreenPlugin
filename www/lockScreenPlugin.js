// Custom Lock Screen Plugin.
// Created by Boris Filipović on 20/2/2015.
// MIT Licensed.

var lockScreen = {
	setBackground: function(successcallback, failurecallback){
		cordova.exec(successcallback, failurecallback, "lockScreenPlugin", "lockscreen", []);
	}
}

module.exports = lockScreen;
