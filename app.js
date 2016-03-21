//this is the varialbe for array
var rightAnswers = [];
var ansArray = [];
var questionsArray = [];

var a1 = document.getElementById('ans1');
var a2 = document.getElementById('ans2');
var a3 = document.getElementById('ans3');
var a4 = document.getElementById('ans4');
var a5 = document.getElementById('ans5');
var a6 = document.getElementById('ans6');
var a7 = document.getElementById('ans7');

var prompt1 = 'Do you think I was born in Washington?';
var prompt2 = 'Do you think I am married?';
var prompt3 = 'Do you think I have any kids?';
var prompt4 = 'Do you think I own any pets?';
var prompt5 = 'Do you like soccer?';
var prompt6 = 'You do! Do you watch the Sounders?';
var prompt7 = 'What is the age of my son?';

//introduction message; gain user name
var userName = prompt('Time to take a quiz about ME! First off what is your name?');
alert('Nice to meet you ' + userName + ' time to start the quiz.');
console.log('get user name');

//First question
function ask1() {
  questionsArray.push(prompt1);
  var whereBorn = prompt(prompt1);
  if ((whereBorn.toLowerCase() === 'yes') || (whereBorn.toLowerCase() === 'y')) {
    console.log('Yes to born');
    //alert('You are correct!');
    a1.textContent = 'You are correct!';
    rightAnswers.push(true); //track correct answer//
  } else if ((whereBorn.toLowerCase() === ('no')) || (whereBorn.toLowerCase() === ('n'))) {
    console.log('No to born');
    //alert('Believe it or not I have never lived outside of Washington');
    a1.textContent = 'Believe it or not I have never lived outside of Washington';
  } else {
    console.log('Did not understand your answer for born');
    alert('Did not understand your answer.Make sure to answer yes or no');
  }
};
 //second question
function ask2() {
  questionsArray.push(prompt2);
  var married = prompt(prompt2);
  if ((married.toLowerCase() === 'yes') || (married.toLowerCase() === 'y')) {
    console.log('Yes to being married');
    //alert('I am married to my beautiful wife Ashley.');
    a2.textContent = 'I am married to my beautiful wife Ashley.';
    rightAnswers.push(true); //track correct answer//
  } else if ((married.toLowerCase() === ('no')) || (married.toLowerCase() === ('n'))) {
    console.log('no about being married');
    //alert('Wrong, I have been married since 2009');
    a2.textContent = 'Wrong, I have been married since 2009';
  } else {
    console.log('Did not understand your answer for married');
    alert('Did not understand your answer.Make sure to answer yes or no');
  }
};
//third question
function ask3(){
  questionsArray.push(prompt3);
  var kids = prompt(prompt3);
  if ((kids.toLowerCase() === 'yes') || (kids.toLowerCase() === 'y')) {
    console.log('Yes to kids');
    //alert('I do! I have a three year old boy named Henry.');
    a3.textContent = 'I do! I have a three year old boy named Henry.';
    rightAnswers.push(true); //track correct answer//
  } else if ((kids.toLowerCase() === ('no')) || (kids.toLowerCase() === ('n'))) {
    console.log('No to kids');
    //alert('I do have a kid even though you do not think I should.');
    a3.textContent = 'I do have a kid even though you do not think I should.';
  } else {
    console.log('Did not understand your answer for kids');
    alert('Did not understand your answer.Make sure to answer yes or no');
  }
};
//fourth question
function ask4(){
  questionsArray.push(prompt4);
  var pets = prompt(prompt4);
  if ((pets.toLowerCase() === 'yes') || (pets.toLowerCase() === 'y')) {
    console.log('Yes to pets');
    //alert('Absolutely not, kids are enough!');
    a4.textContent = 'Absolutely not, kids are enough!';
    rightAnswers.push(true); //track correct answer//
  } else if ((pets.toLowerCase() === ('no')) || (pets.toLowerCase() === ('n'))) {
    console.log('No to pets');
    //alert('You are right. I do not have time for pets');
    a4.textContent = 'You are right. I do not have time for pets';
  } else {
    console.log('Did not understand your answer for pets');
    alert('Did not understand your answer.Make sure to answer yes or no');
  }
};
//fifth question
function ask5() {
  questionsArray.push(prompt5);
  var userAnswer = prompt(prompt5);
  if ((userAnswer.toLowerCase() === 'yes') || (userAnswer.toLowerCase() === 'y')) {
    console.log('user does like soccer');
    a5.textContent = 'Cool.';
    function ask6(){
      questionsArray.push(prompt6);
      var soccer = prompt(prompt6);
      rightAnswers.push(true);
      if ((soccer.toLowerCase() === 'yes') || (soccer.toLowerCase() === 'y')){
        console.log('yes to Sounders');
    //This is the bonus question if they answer yes
        //alert('Cool, I watch every game!');
        a6.textContent = 'Cool, I watch every game!';
        rightAnswers.push(true); //track correct answer//
      } else if ((soccer.toLowerCase() === 'no') || (soccer.toLowerCase() === 'n')) {
        console.log('no on watching the Sounders');
        //alert('Bummer, you should give them a try');
        a6.textContent = 'Bummer, you should give them a try';
      }
    };
    ask6();
  } else if ((userAnswer.toLowerCase() === ('no')) || (userAnswer.toLowerCase() === ('n'))) {
    console.log('user answer is no about soccer');
    //alert('that is okay, I still like you.');
    a5.textContent = 'that is okay, I still like you.';
  } else {
    console.log('Did not understand your answer for soccer');
    alert('Did not understand your answer. Make sure to answer yes or no');
  }
};
//this is the last question that allows 4 guesses
function ask7(){
  questionsArray.push(prompt7);
  var userGuess;
  for(var i = 0;( i < 4 && userGuess !== 3); i++) {
    userGuess = prompt(prompt7);
    userGuess = parseInt(userGuess);
    console.log('4 guesses Q1');
    if (userGuess > 3) {
      console.log('Guess too high');
      alert('Nope, too high');
    } else if (userGuess < 3) {
      console.log('Guess too low');
      alert('Nope, too low');
    } else if (isNaN(userGuess)) {
      alert('not a number');
      console.log('not a number');
    } else {
      console.log('Guess is correct');
      //alert('You are correct!');
      a7.textContent = 'You are correct!';
      rightAnswers.push(true); //track correct answers//
    }
  };
};

ask1();
ask2();
ask3();
ask4();
ask5();
ask7();

//
//this is the message telling user how many questions were correct
alert('Good job you got ' + rightAnswers.length + ' out of 7 questions right!');
console.log('amount of correct answers: ' + rightAnswers.length);
