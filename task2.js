// JavaScript Document
function myfun()
{
	var a = document.getElementById("input").value;
	var b = document.getElementById("input2").value;
	if(a>b)
	{
		document.write(a+" is greater number");
	}
	else if(a<b)
	{
		document.write(b+" is greater number");
	}
	else if(a==b)
	{
		document.write(" both are equal number");
	}
}