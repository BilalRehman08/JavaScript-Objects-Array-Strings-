// ======================================== Chapter 17-20 ========================================

// Question # 1
// var multidimensional = [[],[],[]];


// Question # 2
// var multidimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multidimensional[0]+"<br>");
// document.write(multidimensional[1]+"<br>");
// document.write(multidimensional[2]+"<br>");


// Question # 3
// for (var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

// Question # 4
//  var num = 2;
//  for (var i=1;i<=15;i++){
//      document.write(num+"x"+i+"="+(i*num)+"<br>");
//  }

// Question # 5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0;i<fruits.length;i++){
//     document.write("Elemment at "+i+" is "+fruits[i]+"<br>");
// }

// Question # 6
// var lst = []
// for (var i=1; i<=20;i++){
//     lst.push(i);
    
// }
// document.write("Counting: "+lst);
// document.write("<br>");
// document.write("Reverse: "+lst.reverse());
// document.write("<br>");
// var evenn = [];
// var odd = [];
// var series = [];
// for (var j=0;j<lst.length;j++){
//     if (j%2==0){
//         evenn.push(j);
//         series.push(j+"k");
//     }else{
//         odd.push(j);
//     }
// }       
// document.write("Even: "+evenn);
// document.write("<br>");
// document.write("Odd: "+odd);
// document.write("<br>");
// document.write("Series: "+series);


// Question # 7
// var a = ["cake","apple pie","cookie","chips","patties"];
// var sea  = prompt();
// var abc = true
// for (var i=0; i<a.length;i++){
//     if (sea==a[i]){
//         abc = false
//         document.write(sea + " is avalaible");
//     }
// }
// if (abc==true){
//     document.write(sea + " is not avalaible");
// }


// Question # 8
//  var arr = [24, 53, 78, 91, 12];
//  document.write("Array Items: "+arr+"<br>")
//  arr.sort();
//  arr.reverse();
//  document.write("Largest number is: "+arr[0]);


// Question # 9
// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: "+arr+"<br>")
// arr.sort();
// document.write("Smallest number is: "+arr[0]);


// Question # 10

// var num = 5;
// for (var i=1;i<=10;i++){
//     document.write(i*num+",");
// }




// ======================================== Chapter 21-25 ========================================

// Question # 1

// var firstName = prompt("enter first name: "); 
// var lastName = prompt("enter last name: "); 
// document.write(" Hello ! " + firstName + " " + lastName + "<br>" + " Have a nice day. ");


// Question # 2

// var phone = prompt("Favourite phone: "); 
// var len = phone.length;
// document.write("My Favorite phone is: " + phone + "<br>" + "String length is: " + len);


// Question # 3

// var word = "Bilal"
// var i = word.indexOf("a");
// document.write("String: " + word + "<br>" + "Index of 'n' is: " + i);


// Question # 4

// var word = "Hello World"
// var i = word.lastIndexOf("l");
// document.write("String: " + word + "<br>" + "Last index of 'l' is: " + i);


// Question # 5

// var word = "Pakistani"
// var ch = word.charAt(3);
// document.write("String: " + word + "<br>" + "Character at Index 3: " + ch);


// Question # 6

// var firstName = prompt("enter first name: "); 
// var lastName = prompt("enter last name: "); 
// var fullName = firstName.concat(lastName);
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");


// Question # 7

// var word = "Hyderabad";
// var r = word.replace("Hyder","Faisal");
// document.write("String: " + word + "<br>" + "After replacement: " + r);


// Question # 8

// var str = 'Ali and Sami are best friends.They play cricket and football together.';
// var newStr = str.replace('and','&');
// document.write(newStr);


// Question # 9

// var a="472";
// document.write("Value: "+a+"<br>")
// document.write("Type: " +typeof(a)+"<br>");
// var b=Number(a);
// document.write("Value: "+b+"<br>")
// document.write("Type: " +typeof(b)+"<br>");


// Question # 10

// var a=prompt("Enter the word you want to convert into uppercase");
// document.write("User Input: "+a+"<br>");
// var b= a.toUpperCase();
// document.write("Upper Case: "+b+"<br>");


// Question # 11

// var a="javascript"
// document.write(a[0].toUpperCase() + a.slice(1,a.length).toLowerCase());


// Question # 12

// var a=35.36;
// var b=Number(a.toString().replace('.', ''))
// var c=b.toString();
// document.write(typeof(a)+" : "+a+"<br>");
// document.write(typeof(c)+" : "+c+"<br>");


// Question # 13

// var userName=prompt("Enter your Input: ");
// var message;
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("Please enter a valid username");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }
// }
// alert(message);


// Question # 14

// var lst = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery want do you want to order Sir/Ma'am");
// var lo = order.toLowerCase();
// var finalll = lst.includes(lo);
// if(finalll == true){
//     alert(b+" is availible at index "+a.indexOf(b)+" in our bakery")
// }
// else{
//     alert("We are sorry. "+b+" is not in our bakery")
// }


// Question # 15

// var password = prompt("Password: ");
// var inddd = password.charCodeAt(0);
// if (((inddd >=65 && inddd<=90) || (inddd >=97 && inddd<=122)) && (password.length>6)){
//     document.write("Correct Password");
// }else{
//     document.write("Password is not Correct");
// }

// Question # 16

// var university = 'University of Karachi';
// array=university.split("")
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]+"<br>");
// }


// Question # 17

// var word=prompt("Please Enter A Word?");
// lastchar=word.charAt(word.length-1)
// document.write("User Input: "+word+"<br>")
// document.write("Last Character Of Input: "+lastchar)


// Question # 18

// var text="The quick brown fox jumps over the lazy dog"
// document.write("Text: "+text+"<br>")
// text=text.toLowerCase()
// textarr=text.split(" ")
// a=0
// word="the"
// for (let i = 0; i < textarr.length; i++) {
//     if (textarr[i]===word) {
//         a=a+1;
//     }  
// }
// document.write("There are "+a+" occurrence(s) of word:"+word)