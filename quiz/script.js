const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
console.log(answers);
console.log(questions);

const alert = document.querySelector("#alert");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkedAnswers = answers.filter((answer) => answer.checked);
  questions.forEach((question) => {
    question.classList.add("incorrect");
  });
  checkedAnswers.forEach((answer) => {
    const questionItem = answer.closest(".question-item");

    if (answer.getAttribute("value") === "true") {
      console.log("correct");
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      console.log("wrong");
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });

  const allTrue = checkedAnswers.every((answer) => answer.value === "true");
  if (allTrue && checkedAnswers.length === questions.length) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 1000);
  }
});
