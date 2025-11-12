const questions=[
    {
        title: "Maharashtra Capital",
        options: ["Pune", "Nashik", "Mumbai", "Nagpur"],
        correctOption: 3, // Mumbai
    },
    {
        title:"pm of India",
        options:[
            "rahul","narendra","arvind","mamta"
        ],
        correctOption:2,
    },
    {
        title:"cm of mah",
        options:[
            "eknath","devendra","ajay","bacchu"
        ],
        correctOption:2,
    },
    {
        title:"president of India",
        options:[
            "draupadi","radhakrishna","shashi","sonia"
        ],
        correctOption:1,
    },
    {
        title:"pm of US",
        options:[
            "Elon","Bill","Donald","mark"
        ],
        correctOption:3,
    },
    {
        title:"topper of class",
        options:[
            "tanmay","devanshu","prajwal","soyam"
        ],
        correctOption:2,
    }
]
const questionsSection=document.querySelector(".questions")
const option1=document.querySelector(".o1")
const option2=document.querySelector(".o2")
const option3=document.querySelector(".o3")
const option4=document.querySelector(".o4")
const scoreSection=document.querySelector("#score")

const qTitle=document.querySelector(".qTitle")
const nextBtn=document.querySelector("#next")

let currQIndex=0;
let score=0;
const correctAns=4;
const wrongAns=-1;

function loadQuestion(){
      const questionObj = questions[currQIndex];
  qTitle.textContent = questionObj.title;
  option1.textContent = questionObj.options[0];
  option2.textContent = questionObj.options[1];
  option3.textContent = questionObj.options[2];
  option4.textContent = questionObj.options[3];
}
loadQuestion();

function changeScore(optionNumber){
  if(questions[currQIndex].correctOption==optionNumber){
    score+=correctAns;
  }
  else{
    score+=wrongAns;
  }
}

function changeQuestion(){
  if(currQIndex==questions.length-1){
    questionsSection.style.display="none";
    scoreSection.style.display="block";
    scoreSection.textContent="Yout Score is "+score;
  }
  currQIndex++;
  const questionObj=questions[currQIndex];
  qTitle.textContent=questionObj.title;
  option1.textContent=questionObj.options[0];
  option2.textContent=questionObj.options[1];
  option3.textContent=questionObj.options[2];
  option4.textContent=questionObj.options[3];
}

nextBtn.addEventListener(('click'),changeQuestion);
option1.addEventListener('click',()=>{
    changeScore(1);
    changeQuestion();
})

option2.addEventListener('click',()=>{
    changeScore(2);
    changeQuestion();
})

option3.addEventListener('click',()=>{
    changeScore(3);
    changeQuestion();
})

option4.addEventListener('click',()=>{
    changeScore(4);
    changeQuestion();
})
