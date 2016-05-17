
exports.get = function(args) {
	if(!Ti.Network.online){
		alert('Please check your internet connection');
		args.onError && args.onError();
		return false;
	}
	var url = args.url;
	console.log('GET url ',url);
	//alert('GET url ',url);
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(){
		var response = this.responseText;
		console.log('GET success ',response);
		try{
		args.onSuccess(JSON.parse(response));
		
		}catch(e){
			console.log('Server Died, Try again shortly.');
		}
	};
	xhr.onerror = function(e){
	//	console.log('GET err ',JSON.stringify(e));
		console.log('Response ' +xhr.responseText);
		if(!args.processInBg && xhr.responseText && xhr.responseText.length){
			var res = JSON.parse(xhr.responseText);
			res.message && alert(res.message);
		}else if(e.error){
			alert(e.error);
		}
		args.onError && args.onError(e);
	};
	xhr.open('GET',args.url);
	xhr.send();
};

exports.post = function(args) {
	if(!Ti.Network.online){
		alert('Please check your internet connection');
		args.onError && args.onError();
		return false;
	}

	var url = args.url;
	var params = args.params || {};
	
	console.log('POST url ',url);
	console.log('POST params ',JSON.stringify(params));
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(){
		var response = this.responseText;
		console.log('POST success for login ',response);
		//try{
			args.onSuccess && args.onSuccess(JSON.parse(response));
		//}catch(e){
		//	args.onError && args.onError(e);
		//	alert('Server went down. Try again shortly.');
	//	}
	};
	xhr.onerror = function(e){
	//	console.log('POST err ',JSON.stringify(e));
		console.log('Response ' +xhr.responseText);
		if(!args.processInBg && xhr.responseText && xhr.responseText.length){
			var res = JSON.parse(xhr.responseText);
			res.message && alert(res.message);
		}else if(e.error){
			alert(e.error);
		}
		args.onError && args.onError(e);
	};
	xhr.open('POST',url);
	
	xhr.send(params);
};
