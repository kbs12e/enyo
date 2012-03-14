/**
	Determines OS versions of platforms that need special treatment
	Can have one of the following properties:

	* android
	* ie
	* ios
	* webos

	If the property is defined, it will have the value of the major version number of the platform

	Example:

		// android 2 does not have 3d css
		if (enyo.platform.android < 3) {
			t = "translate(30px, 50px)";
		} else {
			t = "translate3d(30px, 50px, 0)";
		}
		this.applyStyle("-webkit-transform", t);
*/
enyo.platform = {};

//* @protected
(function() {
	var n = navigator.userAgent;
	var ep = enyo.platform;
	var ie, a, ios, w;
	// MSIE 10.0
	ie = n.match(/MSIE (\d+)/);
	if (ie) {
		ep.ie = Number(ie[1]);
	}
	// Android 2.3.7
	a = n.match(/Android (\d+)/);
	if (a) {
		ep.android = Number(a[1]);
	}
	// iPad; U; CPU OS 5_1, iPhone OS 5_1, iPod OS 5_1
	ios = n.match(/iP(?:[oa]d|hone)(?:; U; CPU)? OS (\d+)/);
	if (ios) {
		ep.ios = Number(ios[1]);
	}
	// webOS/2.2.4, hpwOS/3.0.5
	w = n.match(/(?:web|hpw)OS\/(\d+)/);
	if (w) {
		ep.webos = Number(w[1]);
	}
	// these platforms only allow one argument for console.log
	enyo.dumbConsole = Boolean(ep.android || ep.ios || ep.webos);
})();