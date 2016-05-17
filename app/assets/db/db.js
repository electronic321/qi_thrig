Ti.Database.install('/db/thriggle.sqlite', 'biotiful');

exports.createTable = function(favorites) {
	//alert('i am creating a table');
	var db = Ti.Database.open('umair');
	db.execute('CREATE TABLE IF NOT EXISTS ' + favorites + ' (id INTEGER PRIMARY KEY,  name TEXT, nameToShow TEXT)');
	db.close();
};

//db.execute('INSERT INTO ' + favorites + ' (name, nameToShow)VALUES(?,?) ', name, nameToShow);

exports.Insert = function(zipcode) {
	var db = Ti.Database.open('biotiful');
	db.execute('UPDATE zipcodes SET zipcode = ' + zipcode + ' WHERE id = 84');
	db.close();
};

exports.BusinessSearch = function() {
	try {
		var db = Ti.Database.open('biotiful');
		var PtTable = db.execute('select catname,catid from categories');
		var data = [];
		var i = 0;
		while (PtTable.isValidRow()) {
			data.push({
				catname : PtTable.fieldByName('catname'),
				catid : PtTable.fieldByName('catid'),
			});
			i++;
			PtTable.next();
		};

	} catch(err) {
		alert("Inside Catch block ... Check your code");
	} finally {
		if (db != null) {
			db.close();
		}
		return data;
	}
};

exports.Show = function() {
	try{
	var db = Ti.Database.open('biotiful');
	var PtTable = db.execute('select zipcode from zipcodes');
	var data = [];
	var i = 0;
	while (PtTable.isValidRow()) {
		data.push({
			zipcode : PtTable.fieldByName('zipcode'),
		});
		i++;
		PtTable.next();
	};}
	catch(err){
		alert("Inside Catch block, check your code");
	}
finally{
	if (db != null) {
		db.close();
	}
	return data;}
};

exports.Like = function(favorites, toFind) {
	var db = Ti.Database.open('biotiful');
	var PtTable = db.execute('SELECT * FROM ' + favorites + ' WHERE name LIKE "%' + toFind + '%"');
	var data = [];
	var i = 0;
	while (PtTable.isValidRow()) {
		data.push({
			name : PtTable.fieldByName('name')
		});
		i++;
		PtTable.next();
	};
	db.close();
	return data;
};

