exports.timePicker = function(callback) {

	var view_holder = Ti.UI.createView({
		layout : 'vertical',
		backgroundColor : 'transparent',
		height : '100%',
		width : '100%'
	});

	var pkr_time = Ti.UI.createPicker({
		top : 20,
		// left : 20,
		// right : 20,
		// bottom : 100,
		minDate : new Date(),
		format24:true,
		//maxDate : new Date(12, 31, 2025),
		type : Ti.UI.PICKER_TYPE_TIME,
		color : '#fff',
		backgroundColor : 'black',
	});
	view_holder.add(pkr_time);

	var btn_ok = Ti.UI.createButton({
		top : 30,
		bottom : 20,
		title : 'OK',
		color : '#fff',
		height : 35,
		width : 60,
		borderRadius : '3',
		font : {
			fontSize : 16
		},
		backgroundColor : '#15525b',

	});
	view_holder.add(btn_ok);
	btn_ok.addEventListener('click', function(e) {
		callback(pkr_time.value);
		view_holder.hide();

	});
	return view_holder;
};
