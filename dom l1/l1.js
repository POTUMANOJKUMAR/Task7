var b=document.getElementById("email");
b.onfocus=function(){
    b.style.backgroundColor="yellow";

}
b.onblur=function(){
    b.style.backgroundColor="green"
}
let h1=document.querySelector(".manoj");
h1.onmouseover=function(){
    h1.style.color="red";
    h1.style.backgroundColor="blue"

}
h1.onmouseout=function(){
    h1.style.color="yellow";
 h1.style.backgroundColor="black"
}
    
   let Bio=document.getElementById("bio")
   Bio.onfocus=function(){
    Bio.style.backgroundColor="blue"
   } 
   Bio.onblur=function(){
    Bio.style.backgroundColor="green"


   }
   let sub=document.querySelector("#sub");
   sub.onmouseover=function(){
    sub.style.color="red"

   }
   sub.onmouseout=function(){
    sub.style.backgroundColor="yellow"

   }
   let file=document.querySelector(".file");
   file.onmouseover=function(){
    file.style.backgroundColor="orange"
    file.style.color="red"
   }
function displayAlert(){
    alert("you clicked on submit button");
}
document.getElementById("sub")
.addEventListener("click",function(){
    alert("you clicked on submit button");

});
document.getElementById("email")
.addEventListener('focus',function(){
    console.log(this)
    this.style.backgroundColor="black";
})
document.querySelector("#email")
.addEventListener('blur',function(){
    this.style.backgroundColor="orange"
})
document.getElementById("bio")
.addEventListener('focus',function(){
    this.style.backgroundColor="red"

})
document.querySelector("#bio")
.addEventListener('blur',function(){
    this.style.backgroundColor="blue"
})
function dispaly(){
    alert("manoj")
}
document.getElementById('age')
.addEventListener('click',dispaly)
let div=document.createElement("div");
div.classList.add("student-list");
let containerDiv=document.querySelector(".container")
containerDiv.appendChild(div);


let subbtn=document.getElementById("sub")
subbtn.addEventListener("click" ,displayStudentDetailes);

function displayStudentDetailes(){

}


