$( document ).ready(function() {
    $( "#newbornAddress" ).hide();
	$( "#minus-button" ).hide();
	$( "#child2" ).hide();
	$( "#child3" ).hide();
	$( "#child4" ).hide();
	$( "#child5" ).hide();
	$( "#cash" ).hide();
	$( "#foreign" ).hide();
	


	$( "input[name='newbornAddressRadio']:radio" ).change(function() {
		var checkedValue = $( "input[name='newbornAddressRadio']:radio" ).filter(':checked').val();
		console.log(checkedValue);
		if(checkedValue == 'other'){
			$( "#newbornAddress" ).show();
		} else {
			$( "#newbornAddress" ).hide();
		}	  
	});
	
	$( "input[name='paymentType']:radio" ).change(function() {
		var checkedValue = $( "input[name='paymentType']:radio" ).filter(':checked').val();
		console.log(checkedValue);
		if(checkedValue == 'homeland'){
			$( "#foreign" ).hide();
			$( "#cash" ).hide();
			$( "#homeland" ).show();
		} else if(checkedValue == 'foreign'){
			$( "#foreign" ).show();
			$( "#cash" ).hide();
			$( "#homeland" ).hide();
		} else {
			$( "#foreign" ).hide();
			$( "#cash" ).show();
			$( "#homeland" ).hide();
		} 
	});
	
	$( "#plus-button" ).click(function() {
		var childrenCount = parseInt($( "#childrenCount" ).val());		
		childrenCount += 1;
		$( "#childrenCount" ).val(childrenCount);
		var id="#child" + childrenCount;
		$( id ).show();	

		if(childrenCount > 1)
			$("#minus-button").show();
		if(childrenCount == 5)
			$("#plus-button").hide();
	});
	
	$( "#minus-button" ).click(function() {
		var childrenCount = parseInt($( "#childrenCount" ).val());	
		var id="#child" + childrenCount;
		$( id ).hide();
		childrenCount -= 1;
		$( "#childrenCount" ).val(childrenCount);

		if(childrenCount == 1)
			$("#minus-button").hide();
		if(childrenCount < 5)
			$("#plus-button").show();
		
		
	});

});
