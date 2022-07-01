
function getInstructions(){
    const instructions=["No cell phones or other secondary devices allowed","Each Question contain 1 mark","No negative marking is there","Do not refresh or back browser window "];
    console.log(instructions);
    let list = document.getElementById("myList");
    instructions.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = item;
      list.appendChild(li);
    });
}
getInstructions();

const next=document.querySelector('#next');

const nextPage=()=>{
  window.location.href="file:///D:/javascriptapp/QuizApp/index.html";
}
next.addEventListener('click',()=>{
  nextPage();
})