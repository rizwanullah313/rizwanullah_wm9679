// JavaScript Document

function myfun()
{
	var a1 = parseFloat(document.getElementById("id1").value);
	var a2 = parseFloat(document.getElementById("id2").value);
	var a3 = parseFloat(document.getElementById("id3").value); 
	var sum = a1+a2+a3;
	var p = sum*100/300;
    document.getElementById("a11").innerHTML = a1;
	document.getElementById("a21").innerHTML = a2;
	document.getElementById("a31").innerHTML = a3;
	document.getElementById("ab").innerHTML = a1+"%";
	document.getElementById("abc").innerHTML = a2+"%";
	document.getElementById("abcd").innerHTML = a3+"%";

	document.getElementById("demo1").innerHTML = sum;
	document.getElementById("demo2").innerHTML = p;
}