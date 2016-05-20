if (Ti.App.Properties.getBool('dbFirstInstall', true)) {
	Ti.Database.install('/db/thriggle.sqlite', 'biotiful').close();
	Ti.App.Properties.setBool('dbFirstInstall', false);
	
}

exports.createTable = function(favorites) {
	//alert('i am creating a table');
	var db = Ti.Database.open('biotiful');
	db.execute('CREATE TABLE IF NOT EXISTS ' + favorites + ' (id INTEGER PRIMARY KEY,  name TEXT, nameToShow TEXT)');
	db.close();
};

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

exports.Show = function() {
	try {
		var db = Ti.Database.open('biotiful');
		var PtTable = db.execute('select city,state,zipcode from zipcodes');
		var dataSearch = [];
		var i = 0;
		while (PtTable.isValidRow()) {
			dataSearch.push({
				zipcode : PtTable.fieldByName('zipcode'),
				city : PtTable.fieldByName('city'),
				state : PtTable.fieldByName('state'),

			});
			i++;
			PtTable.next();
		};
	} catch(err) {
		alert("Inside Catch block, check your code");
	} finally {
		PtTable.close();
		db.close();

		return dataSearch;
	}
};

// exports.Like = function(favorites, toFind) {
// var db = Ti.Database.open('biotiful');
// var PtTable = db.execute('SELECT * FROM ' + favorites + ' WHERE name LIKE "%' + toFind + '%"');
// // var dataLike = [];
// var i = 0;
// while (PtTable.isValidRow()) {
// dataLike.push({
// name : PtTable.fieldByName('name')
// });
// i++;
// PtTable.next();
// };
// db.close();
// return dataLike;
// };
//
