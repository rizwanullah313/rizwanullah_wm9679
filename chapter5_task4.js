// JavaScript Document
function myfun()
{
	var i = parseFloat(document.getElementById("inp").value);
	var j = i*600;
	document.getElementById("demo").innerHTML ="Total Cost to by "+i+" tickets to a movie is "+ j+"PKR";
}