// JavaScript Document
function myfun()
{
	var a = parseFloat(document.getElementById("a1").value);
	var b = parseFloat(document.getElementById("a2").value);
	var c = a*b;
	var d = a/b;
	var e = a%b;
	var f = a-b;
	
	document.getElementById("demo1").innerHTML = c;
	document.getElementById("demo2").innerHTML = d;
	document.getElementById("demo3").innerHTML = e;
	document.getElementById("demo4").innerHTML = f;
	
}