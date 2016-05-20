var args = arguments[0] || {};

// var db = require('/db/db');

//var self = this.getView();
var tableData = [];
var zipcode = [];
var city = [];
var state = [];
// var searching = db.Show();

var searching = args.searchingText;

//alert(JSON.stringify(searching));
var tableView = Ti.UI.createTableView({
	separatorColor : 'transparent',
	data : tableData,
	//search : tf_search,
	filterAttribute : 'zipcode' + 'city' + 'state',
	top : Ti.Android ? '65' : '10'
});

for (var i = 0; i < searching.length; i++) {

	var row = Ti.UI.createTableViewRow({
		//className : 'viewTitles',
		//backgroundColor : '#FFFFFF',
		//rowIndex : index,
		height : 50,
	});
	tableView.add(row);

	zipcode[i] = Ti.UI.createLabel({
		text : searching[i].zipcode,
		color : '#59585E',
		font : {
			fontSize : '16sp',
			//fontWeight : 'bold'
		},
		//touchEnabled : false,
		top : '0',
		left : '20',
		height : '40',
		width : '60'
		//right : '28%'
	});
	row.add(zipcode[i]);
	tableData.push(row);

	city[i] = Ti.UI.createLabel({
		text : searching[i].city,
		color : '#59585E',
		font : {
			fontSize : '16sp',
			//fontWeight : 'bold'
		},
		//touchEnabled : false,
		top : '0',
		left : '20',
		height : '40',
		width : '60'
		//right : '28%'
	});
	row.add(city[i]);
	tableData.push(row);

	state[i] = Ti.UI.createLabel({
		text : searching[i].state,
		color : '#59585E',
		font : {
			fontSize : '16sp',
			//fontWeight : 'bold'
		},
		//touchEnabled : false,
		top : '0',
		left : '20',
		height : '40',
		width : '60'
		//right : '28%'
	});
	row.add(state[i]);
	tableData.push(row);

}
self.add(tableView);

//self.open();
