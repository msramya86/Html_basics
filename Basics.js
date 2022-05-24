var name='Ramya'
var number= 10
var islogin= true
var iscorrect = false
console.log(name)

//Create and concat strings//

const str1="Today a is a beautiful day"
var str2= "Tomorrow is a rainy day"
console.log(str1);
console.log(str2)
//The value of str1 is assigned to str2//
str2=str1;
console.log(str1);
console.log(str2);


const str3= "Ramyadevi"
const str4 ="Muthukrishnan"
const add1 = "430 Ascent Dr"
const add2 = "Apt 3207"
console.log(str3.concat(' ', str4));
console.log(" ".concat(add1,add2));
const str5 ="We hold bi-weekly talks on Fridays from 4:00 PM to 5:30 PM CET for and by researchers and practitioners designing (and implementing) data systems. The objective is to establish a new forum for the Dutch Data Systems community to come together, foster collaborations between its members, and bring in high quality international speakers. We would like to invite all researchers, especially also PhD students, who are working on related topics to join the events. It is an excellent opportunity to receive feedback early on by researchers in your field. "
console.log(typeof(str5))
console.log(str5.length)
console.log(str5[1])




//1.Function to count the characters in a string//
const str7 ="We hold bi-weekly talks on Fridays from 4:00 PM to 5:30 PM CET for and by researchers and practitioners designing (and implementing) data systems. The objective is to establish a new forum for the Dutch Data Systems community to come together, foster collaborations between its members, and bring in high quality international speakers. We would like to invite all researchers, especially also PhD students, who are working on related topics to join the events. It is an excellent opportunity to receive feedback early on by researchers in your field. "
 function myfunction(str6){
    var count=0
    for (var i=0;i<str6.length;i++)
    {
     if (str6[i] !=" ")
        {
            count=count+1;   
        }   
    }
    return count;
}
let func1= myfunction(str7);
console.log(func1);





//3.function to return boolean flag if a number is between 5000 and 9999//
function myFunction2(b)
 {
 
    return Boolean((b > 5000 && b < 9999));
}
        console.log(myFunction2(4000));
        console.log(myFunction2(6000));
        
  //4.Accepts a number and return a cuberoot//

        function myFunction3(number1){
           return Math.cbrt(number1);
        }
        console.log("the cube root of number is"+ myFunction3(4));


//5.Write a function to convert inches to feet//

function myFunction4(number2){
    return (number2/12);
 }
 console.log("The length in feet is"+ myFunction4(120));

//6.Write a function to convert degrees to Fahrenheit//

function toFahrenheit(celcius) {
    return (9/5) * (celcius+32);
  }


let x = toFahrenheit(32);
let text = "The temperature is " + x + " Fahrenheit";

console.log(text)