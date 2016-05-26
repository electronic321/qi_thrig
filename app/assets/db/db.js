// if (Ti.App.Properties.getBool('dbFirstInstall', true)) {
// Ti.Database.install('/db/thriggle.sqlite', 'biotiful').close();
// Ti.App.Properties.setBool('dbFirstInstall', false);
//
// }

var database = Ti.Database.install('/db/thriggle.sqlite', 'biotiful');
database.close();

// exports.createTable = function(favorites) {
// //alert('i am creating a table');
// var db = Ti.Database.open('biotiful');
// db.execute('CREATE TABLE IF NOT EXISTS ' + favorites + ' (id INTEGER PRIMARY KEY,  name TEXT, nameToShow TEXT)');
// db.close();
// };

//db.execute('INSERT INTO ' + favorites + ' (name, nameToShow)VALUES(?,?) ', name, nameToShow);

// exports.Insert = function(zipcode) {
// var db = Ti.Database.open('biotiful');
// db.execute('UPDATE zipcodes SET zipcode = ' + zipcode + ' WHERE id = 84');
// db.close();
// };

exports.BusinessSearch = function() {
	try {
		var db = Ti.Database.open('biotiful');
		var PtTable = db.execute('select catname,catid from categories');
		var dataBusinessSearch = [];
		var i = 0;
		while (PtTable.isValidRow()) {
			dataBusinessSearch.push({
				catname : PtTable.fieldByName('catname'),
				catid : PtTable.fieldByName('catid'),
			});
			i++;
			PtTable.next();
		};

	} catch(err) {
		alert("Inside Catch block ... Check your code");
	} finally {

		db.close();

		return dataBusinessSearch;
	}
};

exports.Like = function(toFind) {
	var db = Ti.Database.open('biotiful');

	// for searching string i.e. city or state
	if (isNaN(toFind)) {
						var PtTable = db.execute( 'SELECT distinct state,zipcode,city FROM zipcodes WHERE city LIKE "%' + toFind + '" LIMIT 300');

		//var PtTable = db.execute('SELECT state, zipcode, city FROM  zipcodes  WHERE city LIKE "%' + toFind + '%"');
		var data = [];
		var i = 0;
		while (PtTable.isValidRow()) {
			data.push({
				state : PtTable.fieldByName('state'),
				zipcode : PtTable.fieldByName('zipcode'),
				city : PtTable.fieldByName('city'),

			});
			i++;
			PtTable.next();
		};
		db.close();
		return data;

	} else {
		//for searching zipcode or any integer value
				var PtTable = db.execute( 'SELECT distinct state,zipcode,city FROM zipcodes WHERE zipcode LIKE "%' + toFind + '" LIMIT 300');

		//var PtTable = db.execute('SELECT state, zipcode, city FROM  zipcodes  WHERE zipcode LIKE "%' + toFind + '%"');
		var data = [];
		var i = 0;
		while (PtTable.isValidRow()) {
			data.push({
				state : PtTable.fieldByName('state'),
				zipcode : PtTable.fieldByName('zipcode'),
				city : PtTable.fieldByName('city'),

			});
			i++;
			PtTable.next();
		};
		db.close();
		return data;
	}

};
