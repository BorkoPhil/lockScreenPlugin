// Custom Lock Screen Plugin.
// Created by Boris Filipović on 20/2/2015.
// MIT Licensed.

var lockScreen = {
	var str = "borisTest";
	setBackground: function(){
		window.echo = function(str, callback) {
				cordova.exec(callback, function(err) {
					callback('Nothing to echo.');
				}, "LockScreen", "lockscreen", []);
		};
	}
}

module.exports = lockScreen;
