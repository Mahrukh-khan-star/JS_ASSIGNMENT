arr = ["mary","deen","ora","dim"]
document.write(arr[2]) 



var m;
for(m=1;m<=10;m++){
    document.write("2" +"x"+ m +"=" + 2*m + "<br>")
}



var names=["kiran","ali","bismaa"]
for(var d=0; d < names.length; d++){

console.log(names[d])

}

var cities = ["lhr","isl","fsl","mul","khi"]


for(var i = 0; i < cities.length ; i++) {    

    if(cities[i] == "khi") {

        alert(cities[i] + " is a cleanest city" ) 
    }

    document.write(cities[i] + "<br>")
}


var a;
for( a=1 ; a < 6; a++) {
    document.write("HELLO MAHA")
}


 var s = prompt("WELCOME TO JS:-D","Enter your Name!");
 alert("WELCOME" +" " + s + ":-)");


var d = prompt("Enter pwd:", "p/w");
if (d !="1234") {
    alert("please enter a valid password!");
}
else {
    alert("your pwd is correct!")
}


alert("Welcome to JS LAND... \n HAPPY CODING");

alert("Welcome to JS Land...");
alert("HAPPY CODING! \n Prevent this page from creating additional Dialogs!");

var username;
var myName = "MAHRUKH KHAN!";

var message = "HELLO WORLD:-D";
alert(message);

var name = "MAHRUKH KHAN";
var age= "22";
var edu = "WEB DEVELOPMENT";

alert(name);
alert(age);
alert(edu);


var s1 ="PIZZA";
var s2 = "PIZZ";
var s3 = "PIZ";
var s4 = "PI";
var s5 = "P";


alert(s1 +  "\n" + s2 + "\n" + s3 + "\n" + s4  + "\n" + s5);


var email = "kmaha5032@gmail.com";

alert("My Email Address is " + email);

var book = "A smarter way to learn JS";
alert("I'm trying to learn from a book" + book);


document.write("HELLO! i can write HTML content through JS");


alert("------------@*^*^*@----------");
     
var a = 30;
var b = 40;
var c;
c = a + b;
alert(c);


var d = 20;
d += 30;
alert(d);



var age = 21;
alert("I am" +" "+ age + " " + "years old!");


var N = 14;
alert("You've visited this site" +" " + N +" "+ "Times." );

var birthyear = 1999;
document.write("My BirthYear is" + " " + birthyear + "." + "<br>" + "Data type of my declared variable is NUMBER!");


var x = prompt("VISITOR'S NAME: ", "Enter ur name!");
var y = prompt("PRODUCT TITLE:", "Enter title");
var z = prompt("QUANTITY HERE", "Enter Quantity");


document.write(x + " " + "ordered" + " " + z + " " + y + " " +  "on XYZ CLOTHING STORE");



var p,q,r;

p = prompt("ENTER FOOD NAME:");
q = prompt("ENTER QUANTITY:");
r = prompt("ENTER CELL #:");

alert("FOOD:" + " " + p + "\n" +  "QUANTITY:" + " " + q + "\n" + "CELL #:" + " " + r); 

LEGAL
var a = "MAHA";
var $a = "KHAN";
var .a= "S9";
var a_1_2 = "REO";
var a012 = "YUMNA";

var _io = "9870000";
alert(_io);

alert(a_1_2);


ILLEGAL

var ?name = "xyz";
var class = "i";
var 9opa = "LENOVO";
var DUMMY VALUE = "Fk";
var tel-do = "xoro";



 var h = "<b>RULES FOR NAMING JS VARIABLES:</b>";

 document.write(h + "<br>" + " " + "<br>" + "Variables name can only contain , <b>numbers, $ , _ and .</b>  For example : $my_Variable." + "<br>" + "Variable must begin with a letter, $  or _ .  For example : $name, _name or name." + "<br>" + "Variables names are case sensitive." + "<br>" + "Variable names should not be <b>JS keywords</b>.");


     
var e = 30 ;
var f = 7;
var g ;
g = e + f;
document.write("<b>Sum of</b>" +" " + e + " " + "<b>and</b>" + " " + f + " " + "<b>is</b> " + g);


     
var e = 30 ;
var f = 7;
var g ;
g = e - f;
document.write("ANSWER =" + " " + g);

var e = 30 ;
var f = 7;
var g ;
g = e * f;
document.write("ANSWER =" + " " + g);

var e = 30 ;
var f = 7;
var g ;
g = e % f;
document.write("ANSWER = " + " " + g);


var num = 10;
var result = 700 + num ;
alert(result);


var rem = 20 % 5;
alert(rem);


var m;
document.write("The value of the variable is " + " " + m);

var a = 200;
document.write("<br> Initial value is " + " " + a);

a = a + 1;
document.write("<br> Value after increament is " + " " + a);

a = a + 7;
document.write("<br> Value after the addition of 7 is " + " " + a);

a = a - 1;
document.write("<br> Value after decreament is " + " " + a);

a = a % 3;
document.write("<br> Remainder is " + " " + a);



var p = 600;
var q = p * 5;
document.write("Total cost of buying 5 tickets to a  movie is " + " "+ q + "PKR"); 



var t;
for (t=1 ; t<=10 ; t++){
    document.write("4" + "x" + t + "=" + 4 * t + "<br>");
}


var C= 25;
var F;

F = ( C * 9/5) + 32;

document.write(C + "<b>C</b>" + " " + "is" + " " + F + "<b>F</b>");




var F= 70;
var C;

C = ( F - 32) *  5/9 ;

document.write(F + "<b>F</b>" + " " + "is" + " " + C + "<b>C</b>");



var item1 = 650;
var item2 = 100;

var quan1 = 3;
var quan2 = 7;

var charges = 100;

var t1 = item1 * quan1;
var t2 = item2 * quan2;
var total = t1 + t2 + charges;

document.write("Price of item 1 is" + " "+ item1 + "<br>" + "Quantity of item 1 is " + " " + quan1 +  "<br>"  + "Price of item 2 is" + " "+ item2 + "<br>" + "Quantity of item 2 is " + " " + quan2+  "<br>" + "Total cost of your Product is " + " "+ total);


var total_marks = 980;
var marks_obt = 804;

result = (marks_obt / total_marks) * 100;

document.write("TOTAL MARKS:" + " " + total_marks + "<br>" + "MARKS OBTAINED: " + " " + marks_obt + "<br>" + "PERCENTAGE : " +  " " + result);


var curr1 = 10;
var curr2 = 25;

var US = curr1 * 105;
var SR = curr2 * 28;

document.write("Conversion of US DOLLARS in PKR = " + " " + US);
document.write("<br> Conversion of RIYALS in PKR = " + " " + SR);


var s = 7;
var t = (((s + 5) * 10 ) % 2);
document.write("RESULT = " + " " + t);


var current_year = 2020;
var birth_year = 1994;

var age = current_year - birth_year;

document.write("<b>HIS/HER AGE IS</b>" + " " + age);

var radius = 20;
var cc = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of a circle is" + " " + radius + "<br>" + "Circumference of a circle is " + " " + cc + "<br>" + "Area of a circle is " +" " + area );

var snack = "WAVY";
var age = 21;
var max_age = 55;
var amount = 5;
var total = (max_age - age) * amount;

document.write("You'll need" + " " + total + " " + snack + " " + "to last you until the ripe old age of " + " " + max_age );


var a = 1;
var newnum = --a;
alert(newnum);


var a = 10;
var b = ++a;
document.write("<b>Result</b>:" + "<br>" + "The value of ++a is " + " " + b + "<br>" + "Now the value of a is :" + " " + b);

var b = a++;
document.write("<br><br>" + "The value of a++ is " + " " + b + "<br>" + "Now the value of a is :" + " " + b);

var b = a--;
document.write("<br><br><br>" + "The value of a-- is " + " " + b + "<br>" + "Now the value of a is :" + " " + b);

var b = --a;
document.write("<br><br>" + "The value of --a is " + " " + b + "<br>" + "Now the value of a is :" + " " + b);



var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
alert(result);
                 

var r1 = --a;
document.write(r1);

var r2 = --a - --b;
document.write(r2);

 var r3 = --a - --b + ++b;
document.write(r3);

 var r4 = --a - --b + ++b + b--;
  document.write(r4);



var input = prompt("Enter ur name:", "your name");
document.write("WELCOME TO JS" + " " + input);


var u = prompt("Enter a Number:", "Number:");

var u1 = parseInt(u);
var i;


if (u != null){
    
for( i =1 ; i<=10 ; i++){
    document.write(u + "x" + i + "=" + u * i + "<br>");
}}

else
{
    for( i =1 ; i<=10 ; i++){
        document.write("5" + "x" + i + "=" + 5 * i + "<br>");
    }
}


var sub1_name = prompt("ENTER SUBJECT NAME", "subject?");
var sub2_name = prompt("ENTER SUBJECT NAME", "subject?");
var sub3_name = prompt("ENTER SUBJECT NAME", "subject?");


var total_marks = 100;

var obt_marks1 = prompt("ENTER OBTAINED MARKS", "marks?");
var obt_marks2 = prompt("ENTER OBTAINED MARKS", "marks?");
var obt_marks3 = prompt("ENTER OBTAINED MARKS", "marks?");



function generateTableHead(table, data) {
     let thead = table. createTHead();
     let row = thead. insertRow(); 
     for (let key of data) { 
         let th = document. createElement("th");
          let text = document}}


var input = prompt("Enter ur city!", 'City');

if (input == "karachi") {
    alert("WELCOME TO " + " " + input);
}

var o = prompt("enter ur gender:","Gender??");

if (o == "male") {
    alert("wELCOME SIR :=D");
}
if (o =="female") {
    alert("WELCOME MAAMl :-D");
}

var color = prompt("Enter color:","Color?");

if (color == "red") {
    alert("MUST STOP!");
}
if (color =="yellow") {
    alert("READY TO MOVE!");
}
if (color == "green"){
    alert("MOVE NOW!");
}

var fuel = prompt("enter ur current fuel of car", "fuel?");

if (fuel < 0.25) {
    alert("Please refill the fuel of ur car!");
}

var a = 4;
if (++a == 5) {
    alert("given cond for var a is true!");
}

var b = 82 ;

if (b++ === 83) {
    alert("given cond for var b is true");
}

var c = 12;
if (c++ === 13) {
     alert("cond_1 is true");
     }
if (c === 13) {
    alert("cond_2 is true");
}
if (++c < 14) {
    alert("cond_3 is TRUE!");
}
if (c === 14) {
    alert("cond 4 is true");
}


var mC = 20000;
var lC = 2000;
var TC = mC + lC;
if (TC === lC + mC) {
    alert("the cost equals");
}



if (true) {
    alert("TRUE");
}

if(false) {
    alert("FALSE");
}

if ("car" < "cat") {
    alert("car is smaller than cat!")
}


var input = prompt("ENTER YOUR OBTAINED MARKS","obt marks.");
var totalmarks = 300;
var perct = (input / totalmarks) * 100;
alert("your percentage is " + perct);


var secret_no = 4;

var guess = prompt("GUESS  ASECRET NUMBER!"," :-D");

if ( guess == secret_no) {
    alert("BINGO! CORRECT ANSWER!");
}
if ( guess == 5) {
    alert("YOU WERE CLOSE ENOUGH!");
}
if ( guess == null){
    alert("ENTER NUMBER PLZ!");
}

var num = prompt("enter no");

if (num % 3 == 0) {
    alert("DIVISIBLE BY 3");
}
if ( num % 3 != 0) {
    alert("NOT DIVISIBLE BY 3");
}


var num = prompt("enter no");

if (num % 2 == 0) {
    alert("iT'S EVEN");
}
if ( num % 2 != 0) {
    alert("IT'S ODD");
}


var temp = prompt("ENTER TEMPERATURE!");

if (temp >= 40 && temp <= 30) {
    alert("It's too hot outside");
}
else if (temp >= 30 && temp <=20) {
    alert("Weather is normal today");
}
else if (temp >= 20 && temp <=10) {
    alert("Today's weather is cool");
}
else  (temp >= 10 && temp <=0)  {
    alert("OMG! today's weather is soo cool!");
}



var number1 =parseInt(prompt("Enter first number","num1"));
var number2 =parseInt(prompt("Enter second number","num2"));



var add = number1 + number2;

var sub = number1 - number2;

var mul = number1 * number2;

var div = number1 / number2;

var rem = number1 % number2;


document.write("ADDITION=  " + add + "<br>" + "SUBTRACTION=  " + sub +"<br>" + "MULTIPLICATION=  " + mul + "<br>" + "DIVISION=  " +div + "<br>" + "REMAINDER=  " + rem); 



var x = prompt("enter  number");
if (x == 8){
    alert("Thatt's a right answer!");

}
else {
    alert("Wrong answer!");
}





var ch =prompt("Enter alphabetic to check whether it's upper case or lower");

if (ch>=65 && ch<=90){
        alert("Character is a capital letter");
}
else if (ch>=97 && ch<=122) {
        alert("Character is a small letter");
}
else if (ch>=48 && ch<=57) {
    
        alert("Character is a digit");
}
else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||(ch>=91 && ch<=96)||(ch>=123 && ch<=127)) {
    	alert("Character is a special symbol");
}

 var int1 =parseInt(prompt("enter integer1"));
 var int2 =parseInt(prompt("enter integer2"));


 if ( int1 > int2) {
     alert("integer1 is greater");
 }

 else if ( int2 > int1) {
     alert("integer2 is greater");
 }

 else if (int1 == int2){
     alert("Both are equal");
 }


var num= parseInt(prompt("enter number!"));

if ( num > 0) {
    alert("POSITIVE!");
}
else if ( num < 0) {
    alert("NEGATIVE!");
}
else if ( num == 0) {
    alert("ZERO!");

}


var v = prompt("enter a character");

var l1 = "a";
var l2 = "e";
var l3 = "i";
var l4 = "o";
var l5 = "u";
if (v == l1) {
    alert("VOWEL");
}
else if (v ==l2) {
    alert("VOWEL");
}
else if (v ==l3) {
    alert("VOWEL");
}
else if (v ==l4) {
    alert("VOWEL");
}
else if (v ==l5) {
    alert("VOWEL");
}
else {
    alert("NOT A VOWEL");
}



var pwd =parseInt(prompt("ENTER YOUR PASSWORD!"));
if (pwd == 261999) {
    alert("YOUR PWD IS CORRECT!");
}

else {
    alert("INCORRECT! PLEASE RE-ENTER UR PWD")
}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "GOOD DAY :-D";
    alert(greeting);
}

else {
    alert("GOOD EVENING!");
}


var time =parseInt(prompt("ENTER TIME:"));
if (time == 1900) {
    if (time >=0000 && time < 1200){
        alert("GOOD MORNING!");
    }
    else if (time >=1200 && time < 1700){
        alert("GOOD AFTERNOON!");
    }
    else if (time >= 1700 && time < 2100){
        alert("GOOD EVENING!");
    }
    else if (time >=2100 && time <=2359){
        alert("GOOD NIGHT!");
    }
//}
else {
    alert("ENTER AGAIN!");
}





var array = [];
var arr1 = ["ORANGE","APPLE","MANGO","BANANA"];
var arr2 = [1,4,6,7,8,9];
var arr3 = [true,false];
var arr4 = [100,"OREO",true];

var edu = ["SSC","HSC","BCS","BCOM","MS","M.PHIL","PhD"];

document.write("<b>QUALIFICATIONS:</b>" + "<br>" + edu[0] +"<br>" + edu[1] + "<br>" + edu[2] +"<br>" + edu[3] + "<br>" + edu[4] +"<br>" + edu[5] + "<br>" + edu[6]);
 



 var names = ["ZAID","HARIM","ZUMAR"];
 var scores = ["320","230","480"];
 var total = 500;      

 var person1 = (scores[0] / total ) * 100;
 var person2 = (scores[1] / total ) * 100;
 var person3 = (scores[2] / total ) * 100;


 document.write("SCORE OF " + names[0] + " is" + " " + scores[0]+ "  AND PERCENTAGE IS  " + person1 + "%");
 document.write("<br>" + "SCORE OF " + names[1] + " is" + " " + scores[1]+ "  AND PERCENTAGE IS  " + person2 + "%");
 document.write("<br>" + "SCORE OF " + names[2] + " is" + " " + scores[2]+ "  AND PERCENTAGE IS  " + person3 + "%");

var colors = ["RED","GREEN","BLUE","PURPLE","VIOLET"];
var x = prompt("What color you want to add in the starting of the list??");

var a = colors.unshift(x);
alert(colors);


 var y = prompt("What color you want to add in the ending of the list??");

 var b = colors.push(y);
 alert(colors);


 var c = colors.unshift("BLACK","WHITE");
 alert(colors);

 var d = colors.shift();
 alert(colors);
alert(colors);
 var e = colors.pop();
 alert(colors);

alert(colors);
var index = parseInt(prompt("AT WHAT INDEX YOU WANT TO INSERT??"));
var colr = prompt("AND WHICH COLOR U WANNA INSERT?")
var add = colors.shift(index,colr);
alert(add);


colors[2] = "INDIGO";
alert(colors);

colors[3] = "PICASO_8*"
alert(colors);


colors.splice(2,2,"PICASSO");
alert(colors);

var colrr1 = colors.slice(1,3);
alert(colrr1);


var sc = [320,230,480,120];
var sorted = sc.sort();
document.write("SCORE OF STUDENTS = " + sc[0] +"," + sc[1] + "," + sc[2] + "," + sc[3]);
document.write("<br>" +"OREDERED SCORE OF STUDENTS = " + sorted);


var cities = ["KHI","LHR","ISL","QUETA","PESH"];
var new_array = cities.slice(2,4);
//alert(new_array);
document.write("CITIES LIST : " + cities[0] + cities[1] + cities[2] + cities[3] + cities[4]);
 document.write("<br>" + "SELECTED CITIES : " + new_array);



var arr = ["THIS", "IS","MY","CAT"];

var ans = arr.join();
alert(ans);


var appliances = ["keyboard","mouse","printer","monitor"];

var m1 = appliances.shift();
var m2 = appliances.shift();
var m3 = appliances.shift();
var m4 = appliances.shift();

document.write(m1 + "<br>" + m2 + "<br>" + m3 + "<br>" + m4);


 var appliances = ["keyboard","mouse","printer","monitor"];

var m1 = appliances.pop();
var m2 = appliances.pop();
var m3 = appliances.pop();
var m4 = appliances.pop();

document.write(m1 + "<br>" + m2 + "<br>" + m3 + "<br>" + m4);


var l;
for(l = 0; l<=10 ; l++) {
    document.write(l + "<br>");
}

appliances.splice(2,2);
alert(appliances);


var marks = [200,300,400,500,600];
var input =parseInt(prompt("enter ur marks"));

if ( input == marks[0]) {
    alert("found");
}
else if ( input == marks[1]) {
    alert("found");
}
else if ( input == marks[2]) {
    alert("found");
}
else if ( input == marks[3]) {
    alert("found");
}
else if ( input == marks[4]) {
    alert("found");
}

else {
    alert("YOUR MARKS IS NOT IN THE LIST");
}
var i;
for(i=0 ; i<=4 ; i++){
    if ( input == marks[i]){
        alert("FOUND ~~~~~~~~~~~");
    }
}

var Fnames = ["MAHA","TALIA","SARAH","DANIYA"];
var Lnames = ["KHAN","WAHID","JAWAD","ALI"];
var arr = [];

var i,j;
for(i=0 ;i<Fnames.length ; i++){
    for(j=0; j< Lnames.length ; j++){
       arr.push(Fnames[i] + Lnames[j]);
    }
}

document.write(arr + "<br>");


var number = parseInt(prompt("ENTER A NUMBER WHICH U WANT TO SHOW THE TABLE OF"));
var i ;
for(i=1 ; i<=number ; i++){
    document.write(number + "x" + i + "=" +number * i + "<br>");
}


var fruits = ["apple","banana","mango","orange","strawberry"];
var i;
for(i=0 ; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
   
  
}



var i;
for(i = 0 ; i <=15 ; i++ ){
    document.write( i + ",");
}


var i;
for(i = 10 ; i >=1 ; i-- ){
    document.write( i + ",");
}

var i;
for(i = 0 ; i <=20 ; i++ ){
    if (i % 2 == 0) {
        document.write(i + ",");
    }
}

var i;
for(i = 0 ; i <=20 ; i++ ){
    if (i % 2 != 0) {
        document.write(i + ",");
    }
}

var i;
for(i = 0 ; i <=20 ; i++ ){
    if (i % 2 == 0) {
        document.write(i + "k" + ",");
    }
}


var A = ["cake","apple_pie","cookies","chips","patties"];
var inp = prompt("WELCOME TO ALPHA BAKERY" + "\n" + "WHAT DO U WANT TO ORDER??","item name");
var i;
for(i=0 ; i <=A.length ; i++) {

    if (inp == A[i]){
        document.write("THIS ITEM IS <b>AVAILABLE</b>");
    } 
    }

var  M = [24,53,78,91,12];
var largest = 91;
var i ;
for(i=0 ; i <=4 ; i++) {
    if (M[i] == largest) {
        alert(M[i]);
    }

}



var  M = [24,53,78,91,12];
var smallest = 12;
var i ;
for(i=0 ; i <=4 ; i++) {
    if (M[i] == smallest) {
        alert(M[i]);
    }

}






var i;
var x = 5 ;
for(i=1 ; i <=100 ; i++){
    document.write(x * i + ",");
}