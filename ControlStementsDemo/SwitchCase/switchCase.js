/* Find the day of week by accepting its number
eg. 1-> Sunday, 2-> Monday etc */

 var day = 4;
 switch (day)
 {
     case 1:
         document.write("<h4>Sunday</h4>");
         break;

     case 2:
         document.write("<h4>Monday</h4>");
         break;

     case 3:
         document.write("<h4>Tuesday</h4>");
         break;

     case 4:
         document.write("<h4>Wednesday</h4>");
         break;

     case 5:
         document.write("<h4>Thursday</h4>");
         break;

     case 6:
         document.write("<h4>Friday</h4>");
         break;

     case 7:
         document.write("<h4>Saturday</h4>");
         break;

     default:
         document.write("<h4>Invalid Input</h4>");
 }
