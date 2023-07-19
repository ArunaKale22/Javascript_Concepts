/*
Q1) Find Whether the number is Even or Odd
Q2) Find if the number is Positive, Negative or 0
Q3) Find if a number is Positve and Even
*/
//Find Whether the number is Even or Odd
document.write("<h1>Find Whether the number is Even or Odd</h1>");
var x = 103;
if (x % 2 == 0)
{
    document.write( "<h3> "+ x +" is an even number</h3>");
}
else
{
    document.write("<h3>"+x+" is an odd number </h3>")
}

//Find if the number is Positive, Negative or 0
document.write("<h1>Find if the number is Positive, Negative or 0</h1>");
var x = 0;
if (x > 0)
{
    document.write( "<h3> "+ x +" is a positive number</h3>");
}
else if (x < 0)
{
    document.write("<h3>"+x+" is a negative number </h3>")
}
else
{
    document.write("<h3>"+x+" is neither a positive nor a negative number </h3>")

}

//Find if a number is Positve and Even
document.write("<h1>Find if a number is Positve and Even</h1>");
var x = 5;
if (x > 0)
{
    document.write("<h3>"+x+" is a positive number</h3>")
    if(x % 2 ==0)
    {
        document.write( "<h3> "+ x +" is an even number</h3>"); 
    }
    else
    {
        document.write("<h1>"+x+" is positive but it is odd</h1>")
    }
}

else
{
    document.write("<h3>"+x+" is a negative number </h3>")
}
//Find if a number is Positve and Even using logical operator
document.write("<h1>Find if a number is Positve and Even using logical operator</h1>");
var x = 8
if(x > 0 && x %2 ==0)
{
    document.write("<h1>"+x+" is positive but it is odd</h1>")
}