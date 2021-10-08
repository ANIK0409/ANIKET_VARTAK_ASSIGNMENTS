/*
document.write("\nexternal js\n");
document.getElementById('th').innerHTML = "This is paragraph";
*/


/*
var a1 = 4;
var a11 = 9
var a2 = "This is string variable";
document.write(a1+a11 ,"<br>", a2,"<br>");
*/

/*
//write only on console
console.log("This is console");
*/


/*

var num = prompt("enter the number");


alert(num+" is entered");
document.write("<br>you have entered: ",num);
//alert input - string

document.write("<br>")


*/


/*
//var foodcost = 125.5
var foodcost = prompt("cost of food")
document.write("total cost of food = ",foodcost)
document.write("<br>for 5 people = ",foodcost*5)
document.write("<br>for 5 people = ",(foodcost/5).toFixed(2))
*/





/*
var name not started by num
var are case sensative
*/

/*

document.write("2^7 = ", Math.pow(2,7));
document.write("<br>abs(-34) = ", Math.abs(-34));
document.write("root of 64 = ", Math.sqrt(64));

*/

/*

var str1 = "AniketVartak";
document.write(str1.length,"<br>");
document.write(str1.indexOf("Var"),"<br>");
document.write(str1.slice(6,12),"<br>");
document.write(str1.substr(6,5),"<br>");

*/


/*

var num = prompt("Enter the number")

if (num % 2 == 0){
	document.write("Even")
}
else{
	document.write("Odd")
}

*/



/*

var num = prompt("Enter number");

switch (num){

	case "5" :
		document.write("five");
		break;
	case "7" :
		document.write("SEVEN");
		break;
	default :
		document.write("Other")

}

*/


/*

var num = prompt("Enter number");
var i = 1;

while(i<num){
	document.write(i,"<br>");
	i++;
}

*/



/*



var num = prompt("Enter number")

for (var i = 0; i < num; i++) {
	
	for(var j = 0 ; j <=i ; j++){
		document.write("*   ");
	}

document.write("<br>")
}


*/




var list = ["Anik","Teja","sid","ashu","sam"];

//document.write(list[0]);

function calldata(){
	var l = list.length;
	for(var i = 0; i <= l ; i++){
	document.write(list[i],"<br>");
}
}

calldata();































/*

https://en.wikipedia.org/wiki/List_of_Marathi_film_actors

var names = document.getElementsByClassName("thumbcaption");
undefined
names[0].innerText
'Nana Patekar'
for(i = 0; i<names.length;i++){
console.log(names[i].innerText)
}
VM1610:2 Nana Patekar
VM1610:2 Ashok Saraf
VM1610:2 Varsha Usgaonkar
VM1610:2 Sai Tamhankar
VM1610:2 Subodh Bhave
undefined


*/
