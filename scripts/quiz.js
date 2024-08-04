// Array of quiz questions
const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    question: "Which player has won the most Ballon d'Or awards?",
    options: [
      'Lionel Messi',
      'Cristiano Ronaldo',
      'Johan Cruyff',
      'Michel Platini',
    ],
    correctAnswer: 'Lionel Messi',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Which team has won the most UEFA Champions League titles?',
    options: ['Real Madrid', 'Barcelona', 'Bayern Munich', 'AC Milan'],
    correctAnswer: 'Real Madrid',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Michelangelo',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
  {
    question: 'Who scored the most goals in a single World Cup tournament?',
    options: ['Gerd Müller', 'Pelé', 'Miroslav Klose', 'Just Fontaine'],
    correctAnswer: 'Just Fontaine',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      'Charles Dickens',
      'Jane Austen',
      'William Shakespeare',
      'Mark Twain',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'Which player has the most international goals scored?',
    options: ['Cristiano Ronaldo', 'Ali Daei', 'Lionel Messi', 'Ferenc Puskás'],
    correctAnswer: 'Ali Daei',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Which team won the first FIFA World Cup in 1930?',
    options: ['Uruguay', 'Argentina', 'Brazil', 'Italy'],
    correctAnswer: 'Uruguay',
  },
  {
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    question: 'Who discovered penicillin?',
    options: [
      'Marie Curie',
      'Alexander Fleming',
      'Louis Pasteur',
      'Isaac Newton',
    ],
    correctAnswer: 'Alexander Fleming',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
    correctAnswer: 'Avocado',
  },
  {
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'What is the longest river in the world?',
    options: [
      'Amazon River',
      'Nile River',
      'Yangtze River',
      'Mississippi River',
    ],
    correctAnswer: 'Nile River',
  },
  {
    question: 'Who is known as the "Father of Geometry"?',
    options: ['Euclid', 'Pythagoras', 'Archimedes', 'Thales'],
    correctAnswer: 'Euclid',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
    correctAnswer: 'Diamond',
  },
  {
    question: 'Which element has the atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
    correctAnswer: 'Hydrogen',
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Won', 'Dollar', 'Euro'],
    correctAnswer: 'Yen',
  },
];

// Variables to track the quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  const optionsContainer = document.getElementById('options');
  // reset the answer options
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const messageElement = document.getElementById('message');

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    messageElement.textContent = 'Correct!';
    messageElement.style.color = 'green';
  } else {
    messageElement.textContent = 'Wrong!';
    messageElement.style.color = 'red';
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    setTimeout(() => {
      messageElement.textContent = '';
      loadQuestion();
    }, 700);
  } else {
    displayScore();
  }
}

// Function to display the user's score
function displayScore() {
  document.getElementById(
    'quiz-container'
  ).innerHTML = `<h2>Your total score is ${score} out of ${quizQuestions.length}!</h2>`;
}

// Initialize the quiz
loadQuestion();
