var rightAnswers = [];

var userName = prompt('Time to take a quiz about ME! First off what is your name?');
alert('Nice to meet you ' + userName + ' time to start the quiz.');
console.log('get user name');

var whereBorn = prompt('Do you think I was born in Washington?');
if ((whereBorn.toLowerCase() === 'yes') || (whereBorn.toLowerCase() === 'y')) {
  console.log('Yes to born');
  alert('You are correct!');
  rightAnswers.push(true);
} else if ((whereBorn.toLowerCase() === ('no')) || (whereBorn.toLowerCase() === ('n'))) {
  console.log('No to born');
  alert('Believe it or not I have never lived outside of Washington');
} else {
  console.log('Did not understand your answer for born');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var married = prompt('Do you think I am married?');
if ((married.toLowerCase() === 'yes') || (married.toLowerCase() === 'y')) {
  console.log('Yes to being married');
  alert('I am married to my beautiful wife Ashley.');
  rightAnswers.push(true);
} else if ((married.toLowerCase() === ('no')) || (married.toLowerCase() === ('n'))) {
  console.log('no about being married');
  alert('Wrong, I have been married since 2009');
} else {
  console.log('Did not understand your answer for married');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var kids = prompt('Do you think I have any kids?');
if ((kids.toLowerCase() === 'yes') || (kids.toLowerCase() === 'y')) {
  console.log('Yes to kids');
  alert('I do! I have a three year old boy named Henry.');
  rightAnswers.push(true);
} else if ((kids.toLowerCase() === ('no')) || (kids.toLowerCase() === ('n'))) {
  console.log('No to kids');
  alert('I do have a kid even though you do not think I should.');
} else {
  console.log('Did not understand your answer for kids');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var pets = prompt('Do you think I own any pets?');
if ((pets.toLowerCase() === 'yes') || (pets.toLowerCase() === 'y')) {
  console.log('Yes to pets');
  alert('Absolutely not, kids are enough!');
  rightAnswers.push(true);
} else if ((pets.toLowerCase() === ('no')) || (pets.toLowerCase() === ('n'))) {
  console.log('No to pets');
  alert('You are right. I do not have time for pets');
} else {
  console.log('Did not understand your answer for pets');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var userAnswer = prompt('Do you like soccer?');
if ((userAnswer.toLowerCase() === 'yes') || (userAnswer.toLowerCase() === 'y')) {
  console.log('user does like soccer');
  var soccer = prompt('You do! Do you watch the Sounders?');
  rightAnswers.push(true);
  if ((soccer.toLowerCase() === 'yes') || (soccer.toLowerCase() === 'y')){
    console.log('yes to Sounders');
    alert('Cool, I watch every game!');
    rightAnswers.push(true);
  } else if ((soccer.toLowerCase() === 'no') || (soccer.toLowerCase() === 'n')) {
    console.log('no on watching the Sounders');
    alert('Bummer, you should give them a try');
  }
} else if ((userAnswer.toLowerCase() === ('no')) || (userAnswer.toLowerCase() === ('n'))) {
  console.log('user answer is no about soccer');
  alert('that is okay, I still like you.');
} else {
  console.log('Did not understand your answer for soccer');
  alert('Did not understand your answer. Make sure to answer yes or no');
}

for(var i = 0;( i < 4 && userGuess === sonAge); i++) {
  var sonAge = 3;
  var userGuess = prompt('What is the age of my son?');
  console.log('loop Q1');
  if (userGuess > sonAge) {
    console.log('Guess too high');
    alert('Nope, too high');
  } else if (userGuess < sonAge) {
    console.log('Guess too low');
    alert('Nope, too low');
  } else if (isNaN(userGuess)) {
    alert('not a number');
  } else {
    console.log('Guess is correct');
    alert('You are correct!');
    rightAnswers.push(true);
  }
}

alert('Good job you got ' + rightAnswers.length + ' out of 7 questions right!');
