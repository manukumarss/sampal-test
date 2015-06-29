function calculateAge()
{
document.write("hello")
var birthyear=prompt("enter birthyear"," ");
var currentyear=prompt("enter currentyear"," ");
var age=currentyear-birthyear;
var d = new Date();
var n = d.getFullYear();
document.write("  "+"possible age is"+age );
document.write("<br>"+"current year is "+n)

}
var obj1= new calculateAge();
