var args = arguments[0] || {};

var db = require('/db/db');

$.search.addEventListener('cancel', function() {
	search.blur();
	//$.self.close();
});
var myTemplate = {
	childTemplates : [{
		type : 'Ti.UI.Label',
		bindId : 'label',
		properties : {
			color : 'black',
			font : {
				//fontFamily : 'Arial',
				fontSize : '14dp',
				//fontWeight : 'bold'
			},
			left : '20dp',
			top : 10,
		}
	}]
};

var likes;
$.search.addEventListener('change', function(e) {
	var sections = [];

	likes = db.Like($.search.value);

	var itemId;
	try {
		for (var k = 0; k < likes.length; k++) {

			var rowSection = Ti.UI.createListSection({
			});

			var rowDataSet = [{
				label : {
					text : likes[k].zipcode + "		" + likes[k].state + "		" + likes[k].city,
				},
				properties : {
					itemId : k,
					height : 40,
					backgroundColor : 'transparent',
				}
			}];
			rowSection.setItems(rowDataSet);
			sections.push(rowSection);

		}
		listView.setSections(sections);
		$.self.add(listView);
	} catch(Exception){
		alert("Enter a valid City name or Zipcode");
	}
});

var listView = Ti.UI.createListView({
	templates : {
		template : myTemplate
	},
	defaultItemTemplate : 'template',
	backgroundColor : '#fbfbfb',
	separatorColor : 'black',
	top : 90,
	width : Ti.UI.FILL,
	height : Ti.UI.FILL
});

$.self.add(listView);
listView.addEventListener('itemclick', function(e) {
	args.tf_searchBar.value = likes[e.itemId].city + "	" + likes[e.itemId].state + "	" + likes[e.itemId].zipcode;
	$.self.close();
});

$.self.open();
