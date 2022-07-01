var Topics=[{name:"JavaScript Fundamental", test_id:1},
            {name:"Java Programming", test_id:2,}];

Topics.forEach((topic)=>{
//console.log(Topics);
let o=document.createElement("option")
o.text=topic.name;
o.value=topic.test_id;
select.appendChild(o);
});
select.onchange=function(){
//result.innerHTML=select.value+" test_id";
}

const nextPage=()=>{
    window.location.href="file:///D:/javascriptapp/QuizApp/instruction.html";
}
next.addEventListener('click',()=>{
    nextPage();
   
})
let optionValue =document.querySelector('#select').value;
select.onchange=function(){
    var data=select.value;
    console.log(data)
    localStorage.setItem("data",data);
    }

