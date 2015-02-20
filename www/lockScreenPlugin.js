// Custom Lock Screen Plugin.
// Created by Boris Filipović on 20/2/2015.
// MIT Licensed.

var lockScreen = {
	setBackground: function(){
		window.echo = function(callback) {
				cordova.exec(callback, function(err) {
					callback('Nothing to echo.');
				}, "lockScreenPlugin", "lockscreen", []);
		};
	}
}

module.exports = lockScreen;
