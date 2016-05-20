var forgetPasswordRequest = require('/api/forgetPassword');

$.btn_send.addEventListener('click', function(e) {
	forgetPasswordRequest.forgetPassword({
		email : $.tf_email.value,
	}, function(load) {
		alert("Password sent to" + $.args.email);
		$.self.close();

	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});

});

$.self.open();


	//
	// $.btn_forgotPassword.addEventListener('click', function(e) {
	//
	// forgotPassApiCall.post({
	//
	// url :"http://thriggle.com/api/users/forgotPassword",
	// params : {
	//
	// email : $.tf_email.value,
	//
	// },
	// onSuccess: function(e){
	//
	// alert('Registered Successfully');
	// },
	// onError: function(e){
	//
	// alert('Registration Failed');
	// }
	//
	// });
	// });

