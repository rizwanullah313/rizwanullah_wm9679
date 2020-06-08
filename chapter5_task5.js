// JavaScript Document
function myfun()
{
var n = parseFloat(document.getElementById("tb").value);  
    
var myVar = n;
var myString = "";
for (i=1; i<=10; i++) {
myString += i+ " x " +myVar+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
	
}