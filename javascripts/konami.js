/*
 * Konami-JS ~ 
 * :: Now with support for touch events and multiple instances for 
 * :: those situations that call for multiple easter eggs!
 * Code: http://konami-js.googlecode.com/
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.2 (9/2/2013)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */

var Konami = function (callback) {
	var konami = {
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		input: "",
		pattern: "777671",
		load: function (link) {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) konami = ref_obj; // IE
				konami.input += e ? e.keyCode : event.keyCode;
				if (konami.input.length > konami.pattern.length)
					konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
				if (konami.input == konami.pattern) {
					konami.code(link);
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
			this.iphone.load(link);
		},
		code: function (link) {
			window.location = link
		},
		iphone: {
			start_x: 0,
			start_y: 0,
			stop_x: 0,
			stop_y: 0,
			tap: false,
			capture: false,
			orig_keys: "",
			keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
			code: function (link) {
				konami.code(link);
			},
			load: function (link) {
				this.orig_keys = this.keys;
				konami.addEvent(document, "touchmove", function (e) {
					if (e.touches.length == 1 && konami.iphone.capture == true) {
						var touch = e.touches[0];
						konami.iphone.stop_x = touch.pageX;
						konami.iphone.stop_y = touch.pageY;
						konami.iphone.tap = false;
						konami.iphone.capture = false;
						konami.iphone.check_direction();
					}
				});
				konami.addEvent(document, "touchend", function (evt) {
					if (konami.iphone.tap == true) konami.iphone.check_direction(link);
				}, false);
				konami.addEvent(document, "touchstart", function (evt) {
					konami.iphone.start_x = evt.changedTouches[0].pageX;
					konami.iphone.start_y = evt.changedTouches[0].pageY;
					konami.iphone.tap = true;
					konami.iphone.capture = true;
				});
			},
			check_direction: function (link) {
				x_magnitude = Math.abs(this.start_x - this.stop_x);
				y_magnitude = Math.abs(this.start_y - this.stop_y);
				x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
				y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
				result = (x_magnitude > y_magnitude) ? x : y;
				result = (this.tap == true) ? "TAP" : result;

				if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
				if (this.keys.length == 0) {
					this.keys = this.orig_keys;
					this.code(link);
				}
			}
		}
	}

	typeof callback === "string" && konami.load(callback);
	if (typeof callback === "function") {
		konami.code = callback;
		konami.load();
	}

	return konami;
};

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var listMLG = [
	'http://www.youtube.com/watch?v=X8zfE15AEz4',
	'http://www.youtube.com/watch?v=QvQHVH01uW0',
	'http://www.youtube.com/watch?v=V3G19bEc15k',
	'http://www.youtube.com/watch?v=v_Q6AHVCHVE',
	'http://www.youtube.com/watch?v=1di-Q9kKS88',
	'http://www.youtube.com/watch?v=K-0eCsOStc4',
	'http://www.youtube.com/watch?v=cydSuVfvus8',
	'http://www.youtube.com/watch?v=xJAVH6ylBdo',
	'http://www.youtube.com/watch?v=e_3dUgLXesk',
	'http://www.youtube.com/watch?v=DRhkWUnYUeo',
	'http://www.youtube.com/watch?v=DltFjg20NVs',
	'http://www.youtube.com/watch?v=ySR7YPisf48',
	'http://www.youtube.com/watch?v=k7ka6gvrpRY',
	'http://www.youtube.com/watch?v=6Fx4VqrmHyY',
	'http://www.youtube.com/watch?v=Zk3UzroISfc',
	'http://www.youtube.com/watch?v=UYa5285XTRU',
	'http://www.youtube.com/watch?v=GYjBWXS1-7c',
	'http://www.youtube.com/watch?v=UQrWGgomiKk',
	'http://www.youtube.com/watch?v=yPYVGxuCjds',
	'http://www.youtube.com/watch?v=x5xd-J3hE48',
	'http://www.youtube.com/watch?v=Y27ey39dRYQ',
	'http://www.youtube.com/watch?v=08jL7gShLPM',
	'http://www.youtube.com/watch?v=VuGgunwl3wU',
	'http://www.youtube.com/watch?v=Tmj-f9ookt0',
	'http://www.youtube.com/watch?v=1ExuxDEXWgQ',
	'http://www.youtube.com/watch?v=RvnA0THP3OE',
	'http://www.youtube.com/watch?v=gLl9aSaE1Zs',
	'http://www.youtube.com/watch?v=HVLApWoJufI',
	'http://www.youtube.com/watch?v=8aN-qtkilmo',
	'http://www.youtube.com/watch?v=XIXSy5wVju0',
	'http://www.youtube.com/watch?v=iNHOqKyI3es',
	'http://www.youtube.com/watch?v=-76teDYNUhk'
];

new Konami(function() {
	$.magnificPopup.open({
	items: {
		src: randomFrom(listMLG)
	},
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
	});
});
