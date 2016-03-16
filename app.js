
var userName = prompt('Time to take a quiz about ME! First off what is your name?');
alert('Nice to meet you ' + userName + ' time to start the quiz.');
console.log('get user name');

var whereBorn = prompt('Do you think I was born in Washington?');
if ((whereBorn.toLowerCase() === 'yes') || (whereBorn.toLowerCase() === 'y')) {
  console.log('You are correct!');
  alert('You are correct!');
} else if ((whereBorn.toLowerCase() === ('no')) || (whereBorn.toLowerCase() === ('n'))) {
  console.log('Believe it or not I have never lived outside of Washington');
  alert('Believe it or not I have never lived outside of Washington');
} else {
  console.log('Did not understand your answer. Make sure to answer yes or no.');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var married = prompt('Do you think I am married?');
if ((married.toLowerCase() === 'yes') || (married.toLowerCase() === 'y')) {
  console.log('Yes to being married');
  alert('I am married to my beautiful wife Ashley.');
} else if ((married.toLowerCase() === ('no')) || (married.toLowerCase() === ('n'))) {
  console.log('no about being married');
  alert('Wrong, I have been married since 2009');
} else {
  console.log('Did not understand your answer. Make sure to answer yes or no.');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var kids = prompt('Do you think I have any kids?');
if ((kids.toLowerCase() === 'yes') || (kids.toLowerCase() === 'y')) {
  console.log('I do! I have a three year old boy named Henry.');
  alert('I do! I have a three year old boy named Henry.');
} else if ((kids.toLowerCase() === ('no')) || (kids.toLowerCase() === ('n'))) {
  console.log('Actually I do have one child. A three year old boy named Henry.  ');
  alert('I do have a kid even though you do not think I should.');
} else {
  console.log('Did not understand your answer. Make sure to answer yes or no.');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var pets = prompt('Do you think I own any pets?');
if ((pets.toLowerCase() === 'yes') || (pets.toLowerCase() === 'y')) {
  console.log('No pets try again!');
  alert('Absolutely not, kids are enough!');
} else if ((pets.toLowerCase() === ('no')) || (pets.toLowerCase() === ('n'))) {
  console.log('You are right. I do not have time for pets');
  alert('You are right. I do not have time for pets');
} else {
  console.log('Did not understand your answer. Make sure to answer yes or no.');
  alert('Did not understand your answer.Make sure to answer yes or no');
}

var userAnswer = prompt('Do you like soccer?');
if ((userAnswer.toLowerCase() === 'yes') || (userAnswer.toLowerCase() === 'y')) {
  console.log('user does like soccer');
  var soccer = prompt('You do! Do you watch the Sounders?');
  if ((soccer.toLowerCase() === 'yes') || (soccer.toLowerCase() === 'y')){
    console.log('yes to the soccer question');
    alert('Cool, I watch every game!');
  } else if ((soccer.toLowerCase() === 'no') || (soccer.toLowerCase() === 'n')) {
    console.log('no on watching the Sounders');
    alert('Bummer, you should give them a try');
  }
} else if ((userAnswer.toLowerCase() === ('no')) || (userAnswer.toLowerCase() === ('n'))) {
  console.log('user answer is no about soccer');
  alert('that is okay, I still like you.');
} else {
  console.log('Did not understand your answer. Make sure to answer yes or no.');
  alert('Did not understand your answer.Make sure to answer yes or no');
}
