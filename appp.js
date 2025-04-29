// // 1.

// // let a = +prompt("Enter any positive number")

// //  console.log(a);

// //  console.log(Math.round(a));  round the number like 10 to 11

// // console.log(Math.floor(a));  delete after the . num

// // console.log(Math.ceil(a));   increase one num 



// // // 2.
// // Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

// // let num = +prompt("Enter any positive number")

// // // Math.random(num)

// // console.log("random dice value " + (Math.random() * num).toFixed(0));


// // 8

// // Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.
     
// // let num = +prompt("Enter a number between 1 to 10")

// // if  ( num <= 10) {

// //     console.log("Congratulate you enter the correct number" + ( Math.random() * 11).toFixed(0));
    
// // } else  {
    

// //     console.log("Please! Enter a valid number");
    
// // }



// // Strings Methods 

// // 4.

// // Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.

// // let a = "Hello World"

// // let b = a.lastIndexOf('l')

// // console.log(b);




// // 1 .

// // Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.


// // let a = prompt("Enter your first name")
// // let b = prompt("Enter your second name")

// // let c = a  + b 

// // console.log('Hello ' + c + ' hope you are doing great');


// // 7.

// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// by using replace method

// let city = "Hyderabad"

// let result = city.replace("Hyder" , "Islam")


// console.log(result);

// by using splice method

// let cityArray = city.split('')  first convert string into array

// cityArray.splice( 0 , 5 , "I" , "s" , "l" , "a" , "m")   use splice to replace characters

// let newCity = cityArray.join('')   again join array into string

// console.log(newCity);


// 8.

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.


// // var message = 'Ali and Sami are best friends. They play cricket and football together';

// // var newMessage = message.replace(/and/g, "&");

// // console.log(newMessage);



// // 10.

// // Write a program that takes user input. Convert and
// // show the input in capital letters.

// // let a = "taha hussain"

// //  console.log(a.toUpperCase());
  

// // 12.

// // Write a program that converts the variable num to
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.


// // let num = 33.36

// // let numStar = num.toString()

// // let result =  numStar.replace("." , "")

// // console.log(result);



// // 13.

// // Write a program to take user input and store username
// // in a variable. If the username contains any special symbol
// // among [@ . , !], prompt the user to enter a valid username.
// // For character codes of [@ .



// //   var username = prompt("Enter your username:");

// //   // Function to check invalid username
// //    function checkUsername(name) {
// //     for (var i = 0; i < name.length; i++) {
// //       var charCode = name.charCodeAt(i);

// //       // Check using if-else
// //       if (charCode === 33) { // !
// //         return false;
// //       } else if (charCode === 44) { // ,
// //         return false;
// //       } else if (charCode === 46) { // .
// //         return false;
// //       } else if (charCode === 64) { // @
// //         return false;
// //       }
// //     }
// //     return true; // Valid username if no invalid character found
// //   }

// //   // Keep asking until username is valid
 
// // if (checkUsername(username)) {

// //     alert("Your valid username is: " + username)

// // } else {
// //     alert("Please enter a valid username")
// // }

// //   document.write("Your valid username is: " + username);







// 14.

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// let snacks = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter your snacks").toLowerCase()

// let found = false

// for (let i = 0; i < snacks.length; i++) {

// if (snacks[i].toLowerCase() === userInput) {
  
// console.log(`${userInput} is available at index ${i} in our shop`);

// found = true
//   break
     
// }

// }

// if(!found) {
//   console.log("sorry its not availaible in our shop");
  
// }


// Write a program to convert the following string to an
// array using string split method.


// let a = "University of karachi"

// let b = a.split('')

// console.log(b);


// 17.

// Write a program to display the last character of a user
// input.

// let a = "Pakistan"

// let b = a.slice(7)

// console.log(b);









// Chapter 3    Date Methods

// 1.
// Write a program that displays current date and time in
// your browser.

// let date = new Date()

// console.log(date);


// 2.
// Write a program that alerts the current month in words.
// For example December.

// let month = new Date   
// let result =  month.getMonth()
// alert(result)




// 3.
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let date = new Date()
// let dayNumber = date.getDay()
// let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
// let dayName = days[dayNumber]
// let shortDay = dayName.slice(0,3)
// console.log(shortDay);


// // 6.
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// let date = moment();    // Create a moment object for current time

// minutesSinceEpoch = date.diff(moment("1970-01-01T00:00:00Z"), 'minutes');  // Difference from Jan 1, 1970 in minutes

// console.log(minutesSinceEpoch);




// 13.
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// let time = new Date().getTime()
// let dob = new Date(prompt("Enter your DOB")).getTime()
// let age = time - dob 
// let final = age / (1000 * 60 * 60 * 24 * 365)

// console.log( `my age is $ {Math.floor(final)}`);




// function calculate(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//             break;
//         default:
//             result = 'Invalid operator';
//     }

//     // Show the result in the browser
//     document.body.innerHTML = `<h2>Result: ${result}</h2>`;

//     // Also return the result
//     // return result;
// }

// // Example usage
// calculate(10, 5, '+'); // It will display 15 in the browser





// let image = document.getElementById('image')

// function updateImage() {
//     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzV6D6JAPgRmMv7vnJyTRvtnLfXYW5BP8N7g&s"
// }


// function resetImage() {
//     image.src = " https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142120/aesthetic-christmas-wallpapers-for-phone-35-578x1024.webp"
// }







// function expand() {

// let content = document.getElementById('content')
// let abc = document.getElementById('abc')
// if (abc.innerHTML === "See less") {
//     content.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitionsectetur molestias sintror optio fuga aliquid? Suscipit, autem reiciendis?"
//     abc.innerHTML = "See more..."

// }   else {

    
//     content.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, optio possimus, maiores eius saepe asperiores dolorum expedita odiototam esse eum. Laborum dolor veniam ratione soluta, laudantium reiciendis impedit nihil?"
//     abc.innerHTML = "See less"

// }


// }




// let cities = ["Karachi" , "Lahore" , "Islamabad" , "Peshawer" , "Quetta"]

// function chunkArray(arr , size) {
  
//   let basket = []
//   let result = []

// for(let i = 0; i < arr.length; i++) {

// basket.push(arr[i])

// if (basket.length === size || i === arr.length -1) {
  
//   result.push(basket)
// basket = []
// }

// }

// return result

// }

// console.log(chunkArray(cities , 2));



// 2nd method

// let chunk = []
// let result = []

// for (let i = 0; i < cities.length; i++) {

//   chunk.push(cities[i])

//   if (chunk.length === 2 || i === cities.length - 1) {
    
//     result.push(chunk)
//     chunk = []

//   }
// }

// console.log(result);


// let number = ''

// function num() {

//     for(let i = 0; i < 10; i++ ) {
//         console.log(number[i]);
        
//     }
// }

// 2.
// Write a function that takes first & last name and then it
// greets the user using his full name.


// let greet = "Taha"

// function fullName() {
//     console.log(greet + " Hussain " + " Welcome");
    
// }

// fullName()


//3.
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// let a = 2
// let b = 4


// function addNumbers() {
    
//     let sum = a + b 
//     console.log(2 + 4);
    
//     return sum;
// }

// addNumbers()




//7.
// Write a function that take start and end number as inputs
// & display counting in your browser.


// function checkNumber(start , end) {
//     let result = ""
//     for(let i = start; i <= end; i++) {

//         result += i + "<br>"
        
//     }
//     document.write(result);

// }

// checkNumber(1 , 10)



// 12.

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestword(sentence) {
    
// let word = sentence.split(" ")
// let longest = word[0]


// for(let i = 0; i < word.length; i++) {

//     if (word[i].length > longest.length) {
//         longest = word[i]
//     }
// }
// return longest

// }

// console.log(longestword("Welcome to Javascript"));


//10.
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.



// function checkPalindrome() {
    
//     let str = "civic"

// let convert = str.split("")

// convert.reverse('')

// let result = convert.join('')

// if (result === str) {
    
//     console.log("Correct!This is a palindrome word");
    
// }else {
//     console.log("false");
    
// }


// }


// checkPalindrome()





// 11.
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// let a = "the quick brown fox"

// function checkCase(a) {
    
//     let convert = a.split(" ")

//     for(let i = 0; i < convert.length; i++) {

//         convert[i] = convert[i][0].toUpperCase() + convert[i].slice(1)

//     }

//     let final = convert.join(" ")
//     console.log(final);
    
// }

// checkCase(a)




// 9 
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// function areaRectangle(a , b) {
    
// let area = ""

// area = a * b

// console.log("Area of rectangle is " + area);


// }

// areaRectangle(5 , 2)



// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3) {
//     let totalMarks = 300; // Assuming each subject is out of 100
//     let obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction(m1, m2, m3) {
//     let avg = calculateAverage(m1, m2, m3);
//     let percentage = calculatePercentage(m1, m2, m3);
    
//     console.log("Average Marks: " + avg.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
// }

// // Example call:
// mainFunction(85, 90, 78);
 








// FUNCTIONS, SWITCH

// STATEMENTS, WHILE... DO-
// WHILE LOOPS





//4.
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.



// function calculateAverage(m1 , m2 , m3) {
//     return(m1,m2,m3) / 3
// }

// function calculatePercantage(m1 , m2 , m3) {
    
//     let totalMarks = 300
//     let obtainedMarks = m1 + m2 + m3

//     return (obtainedMarks / totalMarks) * 100
// }

// function mainFunction(m1 , m2 , m3) {
    
//     let avg = calculateAverage(m1 , m2 , m3)
//     let percentage = calculatePercantage(m1 , m2 , m3)


//      console.log("Average Marks: " + avg.toFixed(2));
//      console.log("Percentage: " + percentage.toFixed(2) + "%");
    
// }

// mainFunction(79 , 84 , 90)




// // 5.
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// function checkIndex(str , char) {
    
// for(let i = 0; i < str.length; i++) {

// if (str[i] === char) {
//     return i
// }

// }

// }

// console.log(checkIndex('hello' , 'e'));
































