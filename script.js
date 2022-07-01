
var id_test= localStorage.getItem("data");
//console.log(id_test);
const Questions=[
    {
        question:"Q1 : What is the full form of HTML",
        a:"Hello To My Land",
        b:"HyperText Markup Language",
        c:"Hyper Test Markup Language",
        d:"Hello Text Markup Language",
        ans:"ans2",
        test_id:1
    },
    {
        question:"Q2 : What is the full form of Js",
        a:"JavaScript",
        b:"Java Source",
        c:"Java Security",
        d:"Java",
        ans:"ans1",
        test_id:1
    },
    {
        question:"Q3 : How we can print output in console",
        a:"console()",
        b:"console.log();",
        c:"csole.log()",
        d:"none",
        ans:"ans2",
        test_id:1
    },
    {
        question:"Q4 function and var are known as",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        ans:"ans3",
        test_id:1
    },
    {
        question:"Q5 Which one of the following is not a keyword:?",
        a:"if",
        b:"with",
        c:"debugger",
        d:"use strict",
        ans:"ans4",
        test_id:1
    },  
    {
        question:"Q1 Which is a reserved word in the Java programming language?",
        a:"method",
        b:"native",
        c:"subclasses",
        d:"reference",
        ans:"ans2",
        test_id:2
    },
    {
        question:"Q2 Which is a valid keyword in java?",
        a:"interface",
        b:"string",
        c:"Float",
        d:"unsigned",
        ans:"ans1",
        test_id:2
    },  
    {
        question:"Q3 Which is a valid declarations of a String??",
        a:"String s1 = null;",
        b:"String s2 = 'null';",
        c:"String s3 = (String) 'abc';",
        d:"String s4 = (String) '\ufeed';",
        ans:"ans1",
        test_id:2
    }, 
    {
        question:" Q4 Which of the following is not a Java features?",
        a:"Dynamic",
        b:"Architecture Neutral",
        c:"Use of pointers",
        d:"Object-oriented",
        ans:"ans3",
        test_id:2
    }, 
    {
        question:" Q5  Which option is false about the final keyword?",
        a:"A final method cannot be overridden in its subclasses.",
        b:"A final class cannot be extended.",
        c:"A final class cannot extend other classes.",
        d:"A final method can be inherited.",
        ans:"ans3",
        test_id:2
    }, 
]
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const labels=document.querySelectorAll('label');
const next=document.querySelector('#next');
console.log(labels);
const data=Questions.filter(Questions =>Questions.test_id==id_test);
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    
    const questionList=data[questionCount]
   // console.log(questionList.test_id);
    question.innerHTML=questionList.question
    option1.innerHTML=questionList.a
    option2.innerHTML=questionList.b
    option3.innerHTML=questionList.c
    option4.innerHTML=questionList.d  
}
loadQuestion();

const getAnswer=()=>{
    let answer;
    answers.forEach((element) => {
        if(element.checked){
            answer=element.id
            //console.log(answer)
        }  
    });
    //console.log(answer)
    return answer;   
}
submit.addEventListener('click',()=>{
    
    const checkAnswer=getAnswer();
    if(checkAnswer==data[questionCount].ans ){
    score++; 
    //console.log(score)
    }
    questionCount++;
        if(questionCount < data.length){
           loadQuestion();
           reset();         
        }
        else if(questionCount==data.length){
            showScore.innerHTML=`<h3>Thankyou for playing you score ${score} marks  out of ${data.length}!</h3>`;
            showScore.classList.remove('scoreArea')
        }
})
const reset=()=>{
    answers.forEach((element) => {
        if(element){
            element.checked=false;
        }     
    });
}









