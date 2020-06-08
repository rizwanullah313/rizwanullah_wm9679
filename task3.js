// JavaScript Document
function myfun()
{
	var i = document.getElementById("name").value;
	if(i>0)
	{
		document.write(i+" number is positive");
	}
	else if(i<0)
	{
		document.write(i+" number is negetive");
	}
	else if(i==0)
	{
		document.write(i+" number is zero");
	}
	else
	{
		document.write("Please Enter a valid number");
	}
	
}