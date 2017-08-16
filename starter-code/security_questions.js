console.log("security_questions.js loaded");

//Create an array called securityQuestions.
//Each element of securityQuestions will be
//an object with two keys: question and expectedAnswer.

let securityQuestions = [
  {question: "What City were you born in?", expectedAnswer: "San Diego"},
  {question: "What High School did you go to?", expectedAnswer: "Grossmont"},
  {question: "What is your favorite color?", expectedAnswer: "white"}
];


for (let i=0; i < securityQuestions.length; i++){
  let receivedAnswer = window.prompt(securityQuestions[i].question);
  if (receivedAnswer != securityQuestions[i].expectedAnswer) {
    alert("Security Check Failed!!")
    break;
  }
};
