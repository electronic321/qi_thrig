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
	db.execute('UPDATE zipcodes SET zipcode = '+ zipcode +' WHERE id = 84' );
	db.close();
};

exports.BusinessSearch = function() {
	var db = Ti.Database.open('biotiful');
	var PtTable = db.execute('select catname from categories');
	var data = [];
	var i = 0;
	while (PtTable.isValidRow()) {
		data.push(PtTable.fieldByName('catname'));
		i++;
		PtTable.next();
	};
	db.close();
	return data;
};


exports.Show = function() {
	var db = Ti.Database.open('biotiful');
	var PtTable = db.execute('select zipcode from zipcodes');
	var data = [];
	var i = 0;
	while (PtTable.isValidRow()) {
		data.push({
			//id : PtTable.fieldByName('id'),
			zipcode : PtTable.fieldByName('zipcode'),
			//nameToShow : PtTable.fieldByName('nameToShow'),
		});
		i++;
		PtTable.next();
	};
	db.close();
	return data;
};

exports.Delete = function(id) {
	var db = Ti.Database.open('biotiful');
	//var f2d = db.execute('SELECT FROM favorites WHERE FASAL LIKE ' + fasal);
	db.execute('DELETE FROM favorites WHERE id = ' + id);
	db.close();
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

