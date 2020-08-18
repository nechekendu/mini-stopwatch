//Creating Objects using Functions Constructors

/*
let john = {
  name: "John",
  yearOfBirth: 1990,
  job: "Teacher",
};
*/

//create a function called a Person

/*
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.lastName = "Scott";
Person.prototype.country = "Canada";
Person.prototype.state = "Louisana";
Person.prototype.Covid19Status = false;

let john = new Person("John", 1990, "Teacher");
let kate = new Person("Kate", 1978, "Designer");
let sam = new Person("Sam", 1970, "Mayor");

console.log(john.lastName, john.country, john.state, john.Covid19Status);
console.log(kate.lastName, kate.country, kate.state, kate.Covid19Status);
console.log(sam.lastName, sam.country, sam.state, sam.Covid19Status);
 */

// Object.create
/*
var personProto = {
  calculateAge: function () {  
    console.log(2016 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

console.log(john);
*/

/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + " what does deign mean to you?");
    };
  } else if (job === "baker") {
    return function (name) {
      console.log(
        "When putting baking powder, how do you measure it " + name + "?"
      );
    };
  } else {
    return function (name) {
      console.log("Hi " + name + " what do you do?");
    };
  }
}
var designerQuestion = interviewQuestion("designer");
var bakerQuestion = interviewQuestion("baker");
var chefQuestion = interviewQuestion("chef");

designerQuestion("Emerie");
bakerQuestion("Fiona");
chefQuestion("Samuel");
*/

//REwriting the above with Closure

/*
function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + " what does design mean to you?");
    } else if (job === "baker") {
      "When putting baking powder, how do you measure it " + name + "?";
    } else {
      console.log("Hi " + name + " what do you do?");
    }
    console.log(name + interviewQuestion);
  };
}
var designerQuestion = interviewQuestion("designer")("Emerie");
var bakerQuestion = interviewQuestion("baker")("Fiona");
var chefQuestion = interviewQuestion("chef")("Samuel");
*/

//Bind, Call, Apply Methods
// Call

/*
let john = {
  name: "John",
  age: 32,
  job: "Teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and Gentleme! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

let emily = {
  name: "Emily",
  age: 25,
  job: "designer",
};
john.presentation("formal", "moring");
john.presentation.call(emily, "friendly", "afternoon");

let johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");
*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan); */

/*
function Question(question, answers, correctAnswers) {
  this.question = question; 
  this.answers = answers;
  this.correctAnswers = correctAnswers;
}
Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (let i = 0; i < this.answers.length; i++) {
    console.log(i + ": " + this.answers[i]);
  }
};

let q1 = new Question(
  "Do you like Programming?",

  ["Yes", "No"],
  0
);
let q2 = new Question(
  "Would you like to build a new project?"[("Yes", "NO", "Maybe")],
  2
);
let q3 = new Question(
  "Do you like Javascript?"[
    ("Yes",
    "No",
    "Im still trying to figure it out",
    "Its quite hard to understand")
  ],
  3
);
let questions = [q1, q2, q3];

let n = Math.floor(Math.random * 3);

questions[n].displayQuestion();
*/

/*
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;

  //the displayQuestion for displaying the question on the console and prompting the user to answer
  this.displayQuestion = (question, answers) => {
    console.log(question);
    for (i = 0; i < answers.length; i++) {
      let option = `answers{i + 1}`;
      console.log(option);
      console.log(answers[i]);
    }

    let userInput = prompt(
      "Attempt the following question, using the options to pick the right answer"
    );
    console.log(`you selected ${answers[userInput - 1]}`);
    return userInput;
  };

  //the checkanswer method for checking if the user got the answer right or wrong
  this.checkAnswer = (userInput) => {
    if (parseInt(userInput, 10) === answer) {
      console.log(`Congrats, you got it right!`);
    } else {
      console.log(`Sorry, you got it wrong. Try it again`);
    }
  };
}

let q1 = new Question("Are you a web developer?"[("Yes", "No")], 0);

let q2 = new Question("Do you like Javascript?"[("No", "Yes")], 1);

let q3 = new Question(
  "Do you make use of VScode?"[("No", "Yes", "Sometimes", "Always")],
  3
);

let questions = [q1, q2, q3];

//used a forloop to display the questions

generateRandomQuestions = (min, max) => {
  let b = max.length - 1;
  let step1 = b - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  let questionNumber = `Question Number ${result + 1}`;
  console.log(questionNumber);
  let popup = questions[result].displayQuestion(
    questions[result].question,
    questions[result].answers
  );
  questions[result].checkAnswer(popup);
};

generateRandomQuestions(0, questions);
*/

// ES5
/*
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
// box5.clickMe(); */

//ES6

/*
const box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".div-1").addEventListener("click", () => {
      let str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box5.clickMe();
*/

/*
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
};
new Person("Mike").myFriends6(friends);
*/

/*
// 117 Coding Challenge

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}
class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density value of ${density} trees per km`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "large");

    console.log(
      `${this.name} which was built in ${
        this.buildYear
      } is a ${classification.get(this.size)} street.`
    );
  }
}

const allParks = [
  new Park("St.Patrick", 1990, 0.2, 215),
  new Park("Finbarrs", 1975, 3.0, 3202),
  new Park("Honeybrooks", 2001, 0.4, 878),
];
const allStreets = [
  new Street("Ocean Avenue", 1990, 1.1, 4),
  new Street("Ikoyi Avenue", 2008, 2.7, 2),
  new Street("Golden Close", 1989, 2.1),
  new Street("4th Street", 1997, 3.3, 5),
];

function reportParks(p) {
  console.log("---------------PARKS REPORT");

  // Density
  p.forEach((el) => el.treeDensity());
}
*/

// ASYNCHRONOUS FUNCTIONS: PROMISE

/*
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500);
});
*/

let secondCount = 0;

//define a global to store the interval when its active
let stopWatch;

const displayPara = document.querySelector(".clock");

function displayCount() {
  //Calculate the hours, minutes, seconds
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 3600);

  //display a leading zero if the value is less than 10
  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  //Write the current stop watch display time into the display paragraph
  displayPara.textContent =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;

  //Increment the second count
  secondCount++;
}

//Store references in buttons
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");

//For the start button
startBtn.addEventListener("click", () => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;
});

//Stop button
stopBtn.addEventListener("click", () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
});

//Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
  secondCount = 0;
});
