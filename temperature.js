function celsiusToFahrenheit()
{

var celsius=prompt("enter the celsius"," ");
var fahrenheit=((celsius*9)/5)+32;
document.write(celsius+"C"+"  is  "+fahrenheit+"F");
}
function FahrenheitTocelsius()
{

var Fahrenheit=prompt("enter the Fahrenheit"," ");
var celsius =((Fahrenheit-32)*5)/9;
document.write("<br>"+Fahrenheit+"F"+"  is  "+celsius+"C");
}
var obj1= new celsiusToFahrenheit();
var obj1= new FahrenheitTocelsius();


