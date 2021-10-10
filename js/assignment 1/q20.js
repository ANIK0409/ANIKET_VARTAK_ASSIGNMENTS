var message = document.getElementsByClassName("message")[0];

message.innerText= "Hello"

var formm = document.forms.q20;

//alert(form1.name.value)

formm.name.onfocus = function(){
	message.innerText = "Enter your name here";
	message.style.opacity = "100%";
}

formm.email.onfocus = function() {
	message.innerText = "Enter your Email id";
	message.style.opacity = "100%";
}

formm.ExtraCheese.onfocus = function() {
	message.innerText = "Get extra cheese on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}

formm.Pepperoni.onfocus = function() {
	message.innerText = "Get Pepperoni on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}

formm.Olives.onfocus = function() {
	message.innerText = "Get Olives on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}

formm.Baccon.onfocus = function() {
	message.innerText = "Get Baccon on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}

formm.Tomatos.onfocus = function() {
	message.innerText = "Get Tomatos on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}

formm.Mushrooms.onfocus = function() {
	message.innerText = "Get Mushrooms on your favourite pizz just in $1.5";
	message.style.opacity = "100%";
}


formm.Delivery.onfocus = function() {
	message.innerText = "For Delivery at your doorstep in just $5 ";
	message.style.opacity = "100%";
}

formm.Pickup.onfocus = function() {
	message.innerText = "Pick up your pizza from out outlet";
	message.style.opacity = "100%";
}

formm.Tip.onfocus = function() {
	message.innerText = "How much you wish to tip us!";
	message.style.opacity = "100%";
}

formm.Address.onfocus = function() {
	message.innerText = "Enter your Address here";
	message.style.opacity = "100%";
}


formm.reset.onfocus = function(){
	message.style.opacity="0%"
}


formm.Submit.onclick = function(){

	var val = 0;

	if(formm.name.checkValidity()){val++;}
	if(formm.email.checkValidity()){val++;}
	if(formm.Address.checkValidity()){val++;}
	if(formm.Delivery.checkValidity()){val++;}

	if(val == 4){
	formm.ShowSummary.style.visibility = "visible"
	}
}

formm.ShowSummary.onclick = function(){
	var name1 = formm.name.value;
	var eml = formm.email.value;
	var addr = formm.Address.value;

	var addon = [];

	 addon[0] = formm.ExtraCheese;
	 addon[1] = formm.Pepperoni;
	 addon[2] = formm.Olives;
	 addon[3] = formm.Baccon;
	 addon[4] = formm.Tomatos;
	 addon[5] = formm.Mushrooms;

	var del = formm.Delivery.checked;

	var added = []
	var addflag = 0

	 for(var i = 0; i< 6 ; i ++){
	 	if(addon[i].checked){ 
	 		added[addflag] = addon[i].value;
	 		addflag++;
	 	 }
	 }

	 var tipp = parseInt(formm.Tip.value.split("%")[0])

	 if(del){
	 	var deli = "Home Delivery"
	 	var delicost = 5
	 }
	 else{
	 	var deli = "Self Pickup"
	 	var delicost = 0
	 }


	 var total = (10 + delicost + ((addflag)*1.5))*((tipp/100)+1);



	alert("Delivery Summary\n"+
		"\nCustomer Name : "+name1+
		"\nCustomer email : "+ eml+
		"\nCustomer Address : "+ addr +
		"\n Order Type : "+deli +
		"\nExtra Addons on Pizza : "+added +
		"\nTotal cost : "+total
		) 


		
}

