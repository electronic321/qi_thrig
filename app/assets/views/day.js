exports.day = function(backgroundColor) {

	var view = Ti.UI.createView({
		backgroundColor : backgroundColor,

	});

	var tableData = [];
	for (var i = 0; i < 10; i++) {

		var row = Ti.UI.createTableViewRow({
			className : 'viewTitles',
			backgroundColor : 'transparent',
			//rowIndex : index,
			height : '140',
			selectionStyle : Ti.Android ? null : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
		});

		var view_image = Ti.UI.createView({
			//image : '/images/interest.png',
			//backgroundColor : 'white',
			top : '10',
			left : '10',
			height : '115',
			width : '110'
		});
		row.add(view_image);

		var image_row = Ti.UI.createImageView({

			image : "/images/domestic.png",
		//	top : '5',
			left : '0',
			height : '115',
			width : '110'
		});
		view_image.add(image_row);

		var label_days = Ti.UI.createLabel({
			text : 'Monday to Friday',
			color : 'black',
			top : '10',
			left : '125',
			font : {
				fontSize : '10sp'
			},
			height : '20',
			width : '150'
		});
		row.add(label_days);

		var imageLike_row = Ti.UI.createImageView({

			image : "/images/like.png",
			top : '15',
			right : '40',
			height : '13',
			width : '13'
		});
		row.add(imageLike_row);

		var label_likeCounts = Ti.UI.createLabel({
			text : '(2)',
			color : 'black',
			top : '10',
			right : '10',
			height : '20',
			width : '20'
		});
		row.add(label_likeCounts);

		var label_title = Ti.UI.createLabel({
			text : 'Velkommen',
			color : 'black',
			top : '25',
			font : {
				fontSize : '18sp',
				fontWeight:'bold',
			},
			left : '125',
			height : '30',
			width : '150'
		});
		row.add(label_title);

		var label_author = Ti.UI.createLabel({
			text : 'By  Muhammad Sabir',
			color : 'black',
			top : '55',
			font : {
				fontSize : '12sp'
			},
			left : '125',
			height : '15',
			width : '150'
		});
		row.add(label_author);

		var label_authorID = Ti.UI.createLabel({
			text : '@  Muhammad Sabir',
			color : 'black',
			top : '70',
			font : {
				fontSize : '12sp'
			},
			left : '125',
			height : '16',
			width : '150'
		});
		row.add(label_authorID);

		var imageLocation_row = Ti.UI.createImageView({

			image : "/images/location.png",
			top : '95',
			left : '120',
			height : '20',
			width : '20'
		});
		row.add(imageLocation_row);

		var label_place = Ti.UI.createLabel({
			text : 'Houstan TX',
			color : 'black',
			top : '95',
			font : {
				fontSize : '16sp'
			},
			left : '145',
			height : '20',
			width : '150'
		});
		row.add(label_place);

		var view_row = Ti.UI.createView({
			//image : '/images/interest.png',
			backgroundColor : 'silver',
			bottom : '0',
			left : '0',
			height : '5',
			width : Ti.UI.FILL
		});
		row.add(view_row);

		tableData.push(row);
	}
	//tableView.setData(tableData);

	tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		//scrollIndicatorStyle : false,
		separatorColor : 'transparent',
		data : tableData,
		top : '0'
	});
	view.add(tableView);
	//tableView.addEventListener('click', function(e) {
	//	alert(e.index);
	//});

	return view;
};
