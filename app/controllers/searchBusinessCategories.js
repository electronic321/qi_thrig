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
	$.self.close();
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
			title : categories[i],
			color : '#000000',
			searchableText : categories[i]
		}
	});
}
listSection.setItems(data);
listView.addEventListener('noresults', function(e) {
	//alert("No results found!");
});
listView.sections = [listSection];
$.self.add(listView);
$.self.open();
