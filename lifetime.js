function calculateAge()
{
var age=prompt("enter your age"," ");
var amount=prompt("enter amount per day"," ");
var Rday=(70-age)*365;
var Ramount=Rday*amount;
var d = new Date();
var n = d.getFullYear();

document.write("  "+ "You will need  "+ Ramount +"   to last you until the ripe old age of  70years");
document.write("<br>"+"current year is "+n)
}
var obj1= new calculateAge();
