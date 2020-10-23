const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(question => {

   question.addEventListener('click', function(e) {
       e.preventDefault();
       
       questions.forEach(question => {
           question.classList.remove('open');
        });
        answers.forEach(answer => {
            answer.classList.remove('active');
        });
        
    question.classList.add('open');
    question.nextElementSibling.classList.add('active');
   });

});