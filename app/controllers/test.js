var globalVariables = require('/globalVariables');
var ListsDetail2 = require('/ui/ListsDetail2');
var optionDialogListFilter = require('/lib/optionDialogListFilter');
var listByStatusView = require('/lib/listByStatusView');
var listByCampaignView = require('/lib/listByCampaignView');
var campaigns = require('/api/campaigns');
var allLists = require('/api/allLists');







function Lists() {
	//0414793183
	var count = 0;
	var od;
	var odLF;
	var backButtonCheck = false;

	if (Ti.Platform.osname === "android") {
		var self = Ti.UI.createView({
			backgroundColor : "#EAEBEE",
		});

		var actionBar = Ti.UI.createView({
			backgroundColor : '#EE2A2B',
			top : '0',
			height : '55',
			width : Ti.UI.FILL
		});
		self.add(actionBar);

		var view_menu = Ti.UI.createView({
			backgroundColor : 'transparent',
			//top : '10',
			left : '0%',
			height : Ti.UI.FILL,
			width : '10%'
		});
		actionBar.add(view_menu);
		view_menu.addEventListener('click', function(e) {
			globalVariables.GV.drawer.toggleLeftWindow();
		});

		var img_menu = Ti.UI.createImageView({
			image : '/images/img_menu.png',
			//backgroundColor : '#000000',
			//top : '10',
			right : '0%',
			//height : '20',
			width : '25'
		});
		view_menu.add(img_menu);

		var label_title = Ti.UI.createLabel({
			text : 'LISTS',
			color : '#FFFFFF',
			font : {
				fontSize : '18sp',
				fontWeight : 'bold'
			},
			//top : '',
			//left : '15%',
			//height: '',
			width : Ti.UI.SIZE
		});
		actionBar.add(label_title);

		var view_funnel = Ti.UI.createView({
			//image : '/images/img_funnel.png',
			backgroundColor : 'transparent',
			//top : '10',
			right : '0%',
			height : Ti.UI.FILL,
			width : '12%'
		});
		actionBar.add(view_funnel);

		view_funnel.addEventListener('click', function(e) {
			//alert('Funnel');

			if (count % 2 == 0) {
				odLF = optionDialogListFilter.optionDialogListFilter(function(e) {
					if (e == 0) {
						//alert(e);
						label_title.text = 'ALL LISTS';
						self.remove(view_options);
						self.remove(odLF);
						self.remove(tableView);
						tableData = [];
						campaign_id = '';
						status = '';
						filter = '';
						main();
						count++;
					} else if (e == 1) {
						//alert(e);
						od = listByCampaignView.listByCampaignView(function(value) {
							//alert(value);
							label_title.text = 'BY ' + value;
							self.remove(tableView);
							tableData = [];
							self.remove(view_options);
							self.remove(od);
							campaign_id = value;
							status = '';
							filter = '';
							main();
						}, function(cancel) {
							self.remove(view_options);
							self.remove(od);
						});
						count++;
						self.add(od);
						//self.add(view_options);
						self.remove(odLF);
					} else if (e == 2) {
						//alert(e);
						label_title.text = 'RECENTLY ADDED';
						self.remove(view_options);
						self.remove(odLF);
						self.remove(tableView);
						tableData = [];
						campaign_id = '';
						status = '';
						filter = 'RD';
						main();
						count++;
					} else if (e == 3) {
						//alert(e);
						label_title.text = 'RECENTLY CALLED';
						self.remove(view_options);
						self.remove(odLF);
						self.remove(tableView);
						tableData = [];
						campaign_id = '';
						status = '';
						filter = 'RA';
						main();
						count++;
					} else if (e == 4) {
						//alert(e);
						od = listByStatusView.listByStatusView(function(value) {
							//alert(value);
							label_title.text = value == 'Y' ? 'ACTIVE' : 'INACTIVE';
							self.remove(tableView);
							tableData = [];
							self.remove(view_options);
							self.remove(od);
							campaign_id = '';
							status = value;
							filter = '';
							main();
						});
						count++;
						self.add(od);
						//self.add(view_options);
						self.remove(odLF);
					} else if (e == 5) {
						//alert(e);
						self.remove(view_options);
						self.remove(odLF);
						count++;
					}
				});
				self.add(odLF);
				self.add(view_options);
				odLF.bottom = '0';

				globalVariables.GV.drawer.addEventListener('android:back', function f(e) {
					self.remove(view_options);
					self.remove(odLF);
					self.remove(od);
					globalVariables.GV.drawer.removeEventListener('android:back', f);
					count++;
				});

			} else {
				self.remove(view_options);
				self.remove(odLF);
			}
			count++;
		});

		var img_funnel = Ti.UI.createImageView({
			image : '/images/img_funnel.png',
			//backgroundColor : '#000000',
			//top : '10',
			left : '0%',
			//height : '20',
			width : 20
		});
		view_funnel.add(img_funnel);

	} else {
		var self = Ti.UI.createWindow({
			backgroundColor : "#EAEBEE",
			navTintColor : '#FFFFFF'
		});
		self.titleControl = Ti.UI.createLabel({
			text : 'LISTS',
			color : '#FFFFFF',
			font : {
				fontSize : '18sp',
				fontWeight : 'bold'
			},
		});

		var img_menu = Ti.UI.createImageView({
			image : '/images/img_menu.png',
			//backgroundColor : '#000000',
			height : '18',
			width : '25'
		});
		img_menu.addEventListener('click', function(e) {
			globalVariables.GV.drawer.toggleLeftWindow();
		});
		self.setLeftNavButton(img_menu);

		var img_funnel = Ti.UI.createImageView({
			image : '/images/img_funnel.png',
			//backgroundColor : '#000000',
			height : '22',
			width : '18'
		});
		img_funnel.addEventListener('click', function(e) {
			optionDialogListFilter.optionDialogListFilter(function(e) {
				if (e == 0) {
					//alert(e);
					label_title.text = 'ALL LISTS';
					tableData = [];
					campaign_id = '';
					status = '';
					filter = '';
					main();
					count++;
				} else if (e == 1) {
					//alert(e);
					od = listByCampaignView.listByCampaignView(function(value) {
						//alert(value);
						label_title.text = 'BY ' + value;
						self.remove(tableView);
						tableData = [];
						self.remove(view_options);
						self.remove(od);
						campaign_id = value;
						status = '';
						filter = '';
						main();
					}, function(cancel) {
						self.remove(view_options);
						self.remove(od);
					});
					count++;
					self.add(od);
					//self.add(view_options);
					self.remove(odLF);
				} else if (e == 2) {
					//alert(e);
					label_title.text = 'RECENTLY ADDED';
					tableData = [];
					campaign_id = '';
					status = '';
					filter = 'RD';
					main();
					count++;
				} else if (e == 3) {
					//alert(e);
					label_title.text = 'RECENTLY CALLED';
					tableData = [];
					campaign_id = '';
					status = '';
					filter = 'RA';
					main();
					count++;
				} else if (e == 4) {
					//alert(e);
					od = listByStatusView.listByStatusView(function(value) {
						//alert(value);
						label_title.text = value == 'Y' ? 'ACTIVE' : 'INACTIVE';
						self.remove(tableView);
						tableData = [];
						self.remove(view_options);
						self.remove(od);
						campaign_id = '';
						status = value;
						filter = '';
						main();
					});
					count++;
					self.add(od);
					//self.add(view_options);
					self.remove(odLF);
				} else if (e == 5) {
					//alert(e);
					self.remove(view_options);
					self.remove(odLF);
					count++;
				}
			});
		});
		self.setRightNavButton(img_funnel);
	}

	var tf_search = Ti.UI.createSearchBar({
		backgroundColor : '#FFFFFF',
		hintText : 'Search Lists',
		hintTextColor : '#EAEBEE',
		showCancel : false,
		paddingLeft : '3',
		//borderColor : '#59585E',
		//borderWidth : '0.5',
		color : '#59585E',
		font : {
			fontSize : '16sp',
			//fontWeight : 'bold'
		},
		top : '65',
		left : '10',
		height : '60',
		right : '10'
	});

	var dashboardStatus = '';
	var tableData = [];
	var image_status;

	var label_row = [];
	var img_row = [];
	var tableView;

	var campaign_id = '';
	var status = '';
	var filter = '';

	main();
	function main() {
		allLists.allLists(campaign_id, status, filter, function(e) {
			//alert(JSON.stringify(e.response.lists_list));
			var response = e.response;

			for (var i = 0; i < response.lists_list.length; i++) {

				if (response.lists_list[i].active == 'N') {
					image_status = '/images/btn_inActive.png';
				} else {
					image_status = '/images/btn_active.png';
				}

				var row = Ti.UI.createTableViewRow({
					className : 'viewTitles',
					backgroundColor : '#FFFFFF',
					//rowIndex : index,
					_title : response.lists_list[i].list_name,
					height : 60,
				});

				label_row[i] = Ti.UI.createLabel({
					text : response.lists_list[i].list_name,
					color : '#59585E',
					font : {
						fontSize : '16sp',
						//fontWeight : 'bold'
					},
					//touchEnabled : false,
					//top : '',
					left : '5%',
					//height: '',
					right : '28%'
				});
				row.add(label_row[i]);

				img_row[i] = Ti.UI.createImageView({
					image : image_status,
					//backgroundColor : '#000000',
					//top : '15',
					right : '5%',
					height : '20',
					width : '60'
				});
				row.add(img_row[i]);

				tableData.push(row);
			}

			  
			tableView.addEventListener('click', function(e) {
				//alert(e.index);
				if (Ti.Platform.osname === 'iphone') {
					globalVariables.GV.dashboardNavGroup.openWindow(ListsDetail2('dashboard', response.lists_list[e.index], refreshInNextScreen));
				} else {
					new ListsDetail2(response.lists_list[e.index], refreshInNextScreen).open();
				}
			});

		}, function(error) {

		});
	}

	///////////////////////// Refreshing the Screen ////////////////////////////

	function refreshInNextScreen() {
		setTimeout(function() {
			self.remove(tableView);
			tableData = [];
			main();
		}, 5000);
	}

	// reset(myListsRefresh);
	// function reset(refresh) {
	// if (refresh == true) {
	// setTimeout(function() {
	// allLists.allLists(campaign_id, status, filter, function(e) {
	// var response = e.response;
	// //alert(response.lists_list.length);
	// for (var i = 0; i < response.lists_list.length; i++) {
	//
	// if (response.lists_list[i].active == 'N') {
	// image_status = '/images/btn_inActive.png';
	// } else {
	// image_status = '/images/btn_active.png';
	// }
	//
	// label_row[i].text = response.lists_list[i].list_name;
	// img_row[i].image = image_status;
	// }
	// //alert('refreshed');
	// }, function(error) {
	// //alert(error); We're not showing this alert.
	// });
	//
	// reset(myListsRefresh);
	// //alert("Hello");
	// }, 5000);
	// }
	// }

	//////////////////////////// Refreshing the Screen ////////////////////////////

	var view_options = Ti.UI.createView({
		backgroundColor : '#000000',
		//borderRadius : '8',
		layout : 'vertical',
		opacity : 0.7,
		top : '55',
		height : Ti.UI.FILL,
		width : '100%'
	});
	view_options.addEventListener('click', function(e) {
		self.remove(view_options);
		self.remove(odLF);
		//odLF.bottom = '-500';
		count++;
	});

	// self.addEventListener('android:back', function(e) {
	// self.close();
	// });

	return self;
}

module.exports = Lists;
