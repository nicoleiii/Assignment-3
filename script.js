//Login Page//

document.getElementById('quiz').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  if (username.trim() !== '') { 
      window.location.href = 'Page1.html';
  } else {
      alert('Invalid username');
  }
});

//Questions and Answers//

const quizData = [
    {
      question: "What is Toronto's timezone?",
      options: ["EST", "GMT", "PST", "CST"],
      answer: "EST"
    },
    {
      question: "What is Los Angeles timezone?",
      options: ["EST", "GMT", "PST", "CST"],
      answer: "PST"
    },
  ];
  
  //Progress Bar, Questions, Options//

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const progressBar = document.getElementById("myBar");
  
  let currentQuestion = 0;
  let score = 0;
  let progressWidth = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", selectAnswer);
      optionsElement.appendChild(button);
    });
  
    progressWidth += 100 / quizData.length;
    progressBar.style.width = progressWidth + "%";
    progressBar.innerHTML = Math.round(progressWidth) + "%";
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
    //Show Result//

  function showResult() {
    questionElement.innerHTML = `
      <p>Your score: ${score}/${quizData.length}</p>
    `;
    optionsElement.innerHTML = "";
    optionsElement.innerHTML = "";
    retryButton.style.display = "block";
  }
  showQuestion();
  