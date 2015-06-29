var radius=prompt("enter the radius"," ");
function calcCircumfrence()
{

var diameter=2*radius;
var Circumfrence=(3.14)*diameter;
document.write("<br>"+"The circumference is  "+Circumfrence +"in");


}
function calcarea()
{

var area=(3.14)*radius*radius;
document.write("<br>"+"The area is  " +area);
}

var obj1= new calcCircumfrence();
var obj2= new calcarea();
