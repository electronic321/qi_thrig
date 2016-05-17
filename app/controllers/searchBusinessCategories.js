var args = arguments[0] || {};

var db = require('/db/db');

//console.log(JSON.stringify(categories));

var search = Titanium.UI.createSearchBar({
	barColor : '#000',
	showCancel : true,
	height : 43,
	top : 100,
});
search.addEventListener('cancel', function() {
	search.blur();
	//$.self.close();
});
// for textSearch, use the change event to update the search value
// search.addEventListener('change', function(e){
//     listView.searchText = e.value;
// });

var categories = db.BusinessSearch();
var listView = Ti.UI.createListView({
	searchView : search,
	caseInsensitiveSearch : true
});
// for textSearch, add the search bar or text field as a header view
// var listView = Ti.UI.createListView({headerView: search, caseInsensitiveSearch: true});
var listSection = Ti.UI.createListSection();
var data = [];
for (var i = 0; i < categories.length; i++) {
	data.push({
		properties : {
			left:20,
			itemId : i,
			title : categories[i].catname,
			color : '#000000',
			searchableText : categories[i].catname
		}
	});
}
listSection.setItems(data);
listView.addEventListener('itemclick', function(e) {

	args.lbl_businessCategory.text = categories[e.itemId].catname;
	Alloy.Globals.catid =categories[e.itemId].catid;
	$.self.close();
	//alert(e.itemId);

});
listView.addEventListener('noresults', function(e) {
	//alert("No results found!");
});
listView.sections = [listSection];
$.self.add(listView);
$.self.open();
