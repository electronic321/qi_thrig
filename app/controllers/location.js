// Add in the module
var args = arguments[0] || {};
var MapModule = require('ti.map');
//var win = Ti.UI.createWindow({backgroundColor: 'white'});
var map1 = MapModule.createView({
	userLocation : true,
	mapType : MapModule.NORMAL_TYPE,
	animate : true,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	height : '50%',
	top : 0,
	left : 0,
	width : '50%'
});
var map2 = MapModule.createView({
	userLocation : true,
	mapType : MapModule.TERRAIN_TYPE,
	animate : true,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	height : '50%',
	top : 0,
	right : 0,
	width : '50%'
});
var map3 = MapModule.createView({
	userLocation : true,
	mapType : MapModule.SATELLITE_TYPE,
	animate : true,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	height : '50%',
	bottom : 0,
	left : 0,
	width : '50%'
});
var map4 = MapModule.createView({
	userLocation : true,
	mapType : MapModule.HYBRID_TYPE,
	animate : true,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	height : '50%',
	bottom : 0,
	right : 0,
	width : '50%',
	traffic : true
});
$.self.add(map1);
$.self.add(map2);
$.self.add(map3);
$.self.add(map4);
