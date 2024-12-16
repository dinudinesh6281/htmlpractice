let likesBtn=document.querySelector("#likes-btn");
let dislikesBtn=document.querySelector("#dislikes-btn");
let displayLikes=document.querySelector("#displaylikes");
let displayDisLikes=document.querySelector("#displaydislikes");
let totalDisplay=document.getElementById("displaytotal");

/* 
let likes=0
let dislikes=0
let total=0
*/

let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
let dislikes=localStorage.getItem('dislikes')?localStorage.getItem('dislikes'):0;
let total=localStorage.getItem('total')?localStorage.getItem('total'):0;



displayLikes.textContent=likes;
displayDisLikes.textContent=dislikes;
totalDisplay.textContent=total;

likesBtn.addEventListener("click",function()
{
    likes++
    localStorage.setItem("likes",likes)
    displayLikes.textContent=likes;
    total++
    localStorage.setItem("total",total)
    totalDisplay.textContent=total;
})

dislikesBtn.addEventListener("click",function()
{
    dislikes++
    localStorage.setItem("dislikes",dislikes)
    displayDisLikes.textContent=dislikes;
    total++
    localStorage.setItem("total",total)
    totalDisplay.textContent=total;

})