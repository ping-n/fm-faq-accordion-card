const questions = document.querySelectorAll('.card__questions');

questions.forEach((question) => {
  console.log(question);
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    question.nextElementSibling.classList.toggle('active');
  });
});
