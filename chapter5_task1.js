// JavaScript Document

function myfun()
{
	var a = parseFloat( document.getElementById("id1").value);
	var b = parseFloat( document.getElementById("id2").value);
	var c = 0;
	c=a+b;
	document.getElementById("demo").innerHTML = c;
}