const Data = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Markeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScope",
        b: "JavaScript",
        c: "JavaString",
        d: "JavaStore",
        ans: "ans2"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
const submit = document.querySelector('#submit');

let value = 0;
let score = 0;
 const loadQuestion = () => {

     const questionList = Data[value];
     question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
  }

  loadQuestion();


    const getCheck = ()=>{
       let answer;

    answers.forEach((curElem)=>{
       if(curElem.checked){
           answer = curElem.id;
       }
   });
     return answer;
  };

  const deselectAll = () => {
      answers.forEach((curElem) => curElem.checked = false );
  }

   submit.addEventListener('click',()=>{
     const check = getCheck();  

   if(check === Data[value].ans){
       score++;
   };
   value++;

   deselectAll();

   if(value < Data.length){
       loadQuestion();
   }else{
    showscore.innerHTML = ` 
      <h3>you scored ${score}/${Data.length}</h3>
      <button class='btn' onclick='location.reload()'>Play again</button>`;
      showscore.classList.remove('scorearea');
 }
});