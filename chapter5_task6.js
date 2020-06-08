// JavaScript Document
function myfun()
{
	var a = parseFloat(document.getElementById("t1").value);
	var b = parseFloat(document.getElementById("t2").value);
	
	var c = (b-32)*(5/9);
	var d = a*9/5+32;
	
	document.getElementById("demo1").innerHTML = a +"C is " + d+"F";
    document.getElementById("demo2").innerHTML =b +"C is " + c+"F";

}