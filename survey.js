const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  q1: "What's your name? Nicknames are also acceptable :)",
  q2: "What's an activity you like doing?",
  q3: "What do you listen to while doing that?",
  q4: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  q5: "What's your favourite thing to eat for that meal?",
  q6: "Which sport is your absolute favourite?",
  q7: "What is your superpower? In a few words, tell us what you are amazing at!"
}
//console.log(Object.values(questions));

let questionsArray = Object.values(questions);
let answerArray = [];

function askQuestions(index) {
  if (index === questionsArray.length) {
    writeParagraph(answerArray);
    rl.close();
  } else {
    rl.question(`${questionsArray[index]} `, (answer) => {
      answerArray.push(answer);
      console.log(answer);
      askQuestions(index + 1);
    });
  }
}

function writeParagraph(answers){
  console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
}

askQuestions(0);