// DO NOT CHANGE THE NAMES OF THE ANSWER VARIABLES
// Whatever value you enter into your answer variables, you can see on your index site. 
//Save this file, then open up the index.html file and you will be able to see the result of whatever value you gave each answer variable..

//-----------------------------
// #1 The Fortune Teller
//-----------------------------

  // Since this is the first question, we will help you get started with two of the variables. Feel free to change the value to anything you want.
  // You still need to add variables for the day of the week and the restaurant you will be going to.

var numBurgers = 5;
var restaurant = 'In n Out';

  // We will also help you with part of the result, so that you know what it sort of looks like. REMEMBER, this is not the complete solution. 
  // This is what the final output should look like: You will be eating _____ burgers at this restaurant: _____ with my friend, _____, on this day: ______

var questionOneAnswer = 'You will be eating ' + numBurgers + ' burgers at this restaurant: ' + restaurant;




//-----------------------------
// #2 The Age Calculator 
//-----------------------------

  //Forgot how old someone is? Calculate it! 
  //You will have a total of 3 variables: the current year, the birth year, and a calculation based on the 2 years.
  // Calculate their 2 possible ages based on the stored values. 


// Store your answer here
var questionTwoAnswer = '';




//-----------------------------
// #3 The Temperature Converter
//-----------------------------


// Celsius to Farenheit Answer
var questionThreeAnswerA = '';

// Farenheit to Celsius Answer
var questionThreeAnswerB = '';




//-----------------------------
// #4 The Bonus Question
//-----------------------------

var questionFourAnswer = '';










//-----------------------------
    //DO NOT EDIT THIS SECTION:
    //This section will populate your HTML file with your answers.
//-----------------------------
window.onload = function () {  

  document.getElementById('answer1').innerHTML = questionOneAnswer;
  document.getElementById('answer2').innerHTML = questionTwoAnswer;
  document.getElementById('answer3a').innerHTML = questionThreeAnswerA;
  document.getElementById('answer3b').innerHTML = questionThreeAnswerB;
  document.getElementById('answer4').innerHTML = questionFourAnswer;

}