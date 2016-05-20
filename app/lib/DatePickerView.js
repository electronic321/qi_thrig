(function(){
	//var g = Ti.App.g;

   /*  This module returns a custom date/time picker dialog with an OK button.
    *  @params: 
    * 	 args (object) with following keys:
    * 		- _type (int 0-1) : Define picker type. 0 = Time picker, 1 = Date picker
    * 		- format24 (bool) : Show time in 24h format for Time picker. default =  true.
    * 		- callback (func) : Callback function to which the selected value is passed in object.
    */
	function main(args)
	{
		var self = Ti.UI.createWindow({
			top: 0,				//Ti.Android? 0 : 20,
			fullscreen: true,
			navBarHidden: true,
			//modal: true,
			backgroundColor: 'transparent',
			theme: "Theme.NoActionBarTranslucent"
		});
		
		var shadow = Ti.UI.createView({
			opacity: 0.6,
			backgroundColor: '#000000',
		});
		self.add(shadow);

		var contentView = Ti.UI.createView({
			width: Ti.UI.SIZE,			//'80%',
			height: Ti.UI.SIZE,			//'76%',
			layout: 'vertical',
			//borderRadius: 10,
			//backgroundColor: '#272C2F'
		});
		self.add(contentView);
		
		var myDate = new Date();
		//console.log('now year: ',myDate.getFullYear(),'-5: ',new Date().getFullYear()-5)
		myDate.setYear(new Date().getFullYear()-5);
		//console.log('max date: ',myDate)
		var pkr_date = Ti.UI.createPicker({
			top: 20,
			left: 20,
			right: 20,
			//maxDate: myDate,
			//minDate: new Date('1950-01-01'),
			format24: args.format24 || true,
			value: args.value || new Date(),
			color: '#fff',
			format24: false,
			backgroundColor: 'black',
			type: args._type==0? Ti.UI.PICKER_TYPE_TIME : Ti.UI.PICKER_TYPE_DATE
		});
		contentView.add(pkr_date);
//console.log('Max date: ',pkr_date.maxDate);
//console.log('Min date: ',pkr_date.minDate);
		var btn_ok = Ti.UI.createButton({
			top: 30,
			bottom: 20,
			title: 'OK',
			color: '#fff',
			height: 45,
			width: Ti.UI.FILL,
			borderRadius : '3',
			font: {fontSize: 16},
			backgroundColor : '#15525b'
		});
		contentView.add(btn_ok);
		
		shadow.addEventListener('click',function(e){
			self.close();	// Dialog cancelled. close popup.
			self = null;
		});

		btn_ok.addEventListener('click',function(e){
			////Ti.API.info*('selected date: ',pkr_date.value);
			//var tmpValue = pkr_date.value;
			args.callback && args.callback(pkr_date.value/*.toDateString().substr(4)*/);
			self.close();
		});

		return self;
	}
	module.exports = main;
})();
