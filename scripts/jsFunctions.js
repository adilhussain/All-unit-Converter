

		function computeVolume()
		{
			var inputValue= document.getElementById('inputValue').value;
			var VolumeFrom = document.getElementById('VolumeFrom').value;
			var VolumeTo = document.getElementById('VolumeTo').value;
			var result;
			switch(VolumeFrom)
			{
				case 'Litre': 	
					switch(VolumeTo)
					{
						case 'Litre': result= inputValue; break;
						case 'Gallon': result = inputValue/10; break;
						case 'Drop' : result = inputValue/1000; break;
					}//end inner switch
					break;
				case 'Gallon': 
					switch(VolumeTo)
					{
						case 'Litre': result= inputValue*10; break;
						case 'Gallon': result = inputValue; break;
						case 'Drop' : result = inputValue/100; break;
					}//end inner switch
					break;
				case 'Drop': 
					switch(VolumeTo)
					{
						case 'Litre': result= inputValue*1000; break;
						case 'Gallon': result = inputValue*100; break;
						case 'Drop' : result = inputValue; break;
					}//end inner switch
					break;
			}//End Outer switch
			document.getElementById('outputValue').value=result;
			
		}//End computeLoan
		
	
	
	
	

function computeLength(){
	alert("hello");
	var inputValue= document.getElementById('inputValue').value;
	var lengthFrom = document.getElementById('lengthFrom').value;
	var lengthTo = document.getElementById('lengthTo').value;
	var result;
	switch(lengthFrom){
	case 'mm': 	
				switch(lengthTo){
					case 'mm': result= inputValue; break;
					case 'cm': result = inputValue/10; break;
					case 'm' : result = inputValue/1000; break;
					
				}//end inner switch
				break;
	case 'cm': switch(lengthTo){
					case 'mm': result= inputValue*10; break;
					case 'cm': result = inputValue; break;
					case 'm' : result = inputValue/100; break;
					
				}//end inner switch
				break;
	case 'm': switch(lengthTo){
					case 'mm': result= inputValue*1000; break;
					case 'cm': result = inputValue*100; break;
					case 'm' : result = inputValue; break;
					
				}//end inner switch
				break;
	}//End Outer switch
	
	//alert(result);
	//var interest = (amount * (interest_rate * 0.1)) / months;
	//var payment = ((amount / months) + interest).toFixed(2);
	//payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	alert(result);
	document.getElementById('outputValue').value=result;
	document.getElementById('result').innerHTML=result;
	
	}//End computeLoan


	
	function computeweight(){
	//alert("hello");
	var inputValue= document.getElementById('inputValue').value;
	var weightFrom = document.getElementById('weightFrom').value;
	var weightTo = document.getElementById('weightTo').value;
	var result;
	switch(weightFrom){
	
	case 'mg': 	
				switch(weightTo){
					case 'mg': result= inputValue; break;
					case 'g': result = inputValue*0.001; break;
					case 'kg' : result = inputValue*0.000001; break;
					case 'ton' : result = inputValue*(1.0*(10^(-9))); break;
					case 'ton(uk)' : result = inputValue*(9.8421*(10^(-10))); break;
					case 'gr' : result = inputValue*0.015432; break;
					case 'oz' : result = inputValue*0.000035; break;
					case 'lb' : result = inputValue*0.000002; break;
					case 'carat' : result = inputValue*0.005; break;
				}//end inner switch
				break;
	case 'g': 	
				switch(weightTo){
					case 'mg': result= inputValue*1000; break;
					case 'g': result = inputValue; break;
					case 'kg' : result = inputValue*0.001; break;
					case 'ton' : result = inputValue*0.000001; break;
					case 'ton(uk)' : result = inputValue/1000; break;
					case 'gr' : result = inputValue*15.432358; break;
					case 'oz' : result = inputValue*0.035274; break;
					case 'lb' : result = inputValue*0.002205; break;
					case 'carat' : result = inputValue*5; break;
				}//end inner switch
				break;
	case 'kg': 	
				switch(weightTo){
					case 'mg': result= inputValue*1000000; break;
					case 'g': result = inputValue*1000; break;
					case 'kg' : result = inputValue; break;
					case 'ton' : result = inputValue/1000; break;
					case 'ton(uk)' : result = inputValue*0.000984; break;
					case 'gr' : result = inputValue*15432.3584; break;
					case 'oz' : result = inputValue*35.273962; break;
					case 'carat' : result = inputValue*5000; break;
				}//end inner switch
				break;
	case 'ton': 	
				switch(weightTo){
					case 'mg': result= inputValue*1000000000; break;
					case 'g': result = inputValue*1000000; break;
					case 'kg' : result = inputValue*1000; break;
					case 'ton' : result = inputValue; break;
					case 'ton(uk)' : result = inputValue*0.984207; break;
					case 'gr' : result = inputValue*15432358.4; break;
					case 'oz' : result = inputValue*35273.9619; break;
					case 'lb' : result = inputValue*2204.62262; break;
					case 'carat' : result = inputValue*5000000; break;
				}//end inner switch
				break;
	case 'ton(uk)': 	
				switch(weightTo){
					case 'mg': result= inputValue*1016046909; break;
					case 'g': result = inputValue*1016046.91; break;
					case 'kg' : result = inputValue*1016.04691; break;
					case 'ton' : result = inputValue*1.016047; break;
					case 'ton(uk)' : result = inputValue; break;
					case 'gr' : result = inputValue*15680000; break;
					case 'oz' : result = inputValue*35840; break;
					case 'lb' : result = inputValue*2240; break;
					case 'carat' : result = inputValue*5080234.54 break;
				}//end inner switch
				break;
	case 'gr': 	
				switch(weightTo){
					case 'mg': result= inputValue*64.79891; break;
					case 'g': result = inputValue*0.064799; break;
					case 'kg' : result = inputValue*0.000065; break;
					case 'ton' : result = inputValue/1000; break;
					case 'ton(uk)' : result = inputValue/1000; break;
					case 'gr' : result = inputValue; break;
					case 'oz' : result = inputValue*0.002286; break;
					case 'lb' : result = inputValue*0.000143; break;
					case 'carat' : result = inputValue*0.323995; break;
				}//end inner switch
				break;
	case 'oz': 	
				switch(weightTo){
					case 'mg': result= inputValue*28349.5231; break;
					case 'g': result = inputValue*28.349523; break;
					case 'kg' : result = inputValue*0.02835; break;
					case 'ton' : result = inputValue*0.000028; break;
					case 'ton(uk)' : result = inputValue*0.000028; break;
					case 'gr' : result = inputValue*437.5; break;
					case 'oz' : result = inputValue; break;
					case 'lb' : result = inputValue*0.0625; break;
					case 'carat' : result = inputValue*141.747616; break;
				}//end inner switch
				break;
	case 'lb': 	
				switch(weightTo){
					case 'mg': result= inputValue*453592.37; break;
					case 'g': result = inputValue*453.59237; break;
					case 'kg' : result = inputValue*0.453592; break;
					case 'ton' : result = inputValue*0.000454; break;
					case 'ton(uk)' : result = inputValue*0.000446; break;
					case 'gr' : result = inputValue*7000; break;
					case 'oz' : result = inputValue*16; break;
					case 'lb' : result = inputValue; break;
					case 'carat' : result = inputValue*2267.96185; break;
				}//end inner switch
				break;
	case 'carat': 	
				switch(weightTo){
					case 'mg': result= inputValue*200; break;
					case 'g': result = inputValue*0.2; break;
					case 'kg' : result = inputValue*0.0002; break;
					case 'ton' : result = inputValue/1000; break;
					case 'ton(uk)' : result = inputValue/1000; break;
					case 'gr' : result = inputValue*3.086472; break;
					case 'oz' : result = inputValue*0.007055; break;
					case 'lb' : result = inputValue*0.000441; break;
					case 'carat' : result = inputValue; break;
				}//end inner switch
				break;

	}//End Outer switch
	
	//alert(result);
	//var interest = (amount * (interest_rate * 0.1)) / months;
	//var payment = ((amount / months) + interest).toFixed(2);
	//payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('outputValue').value=result;
	document.getElementById('laro').innerHTML=result;
	
	
	}//End computeLoan
	

	
	
	
	
	
 


	
	
	
