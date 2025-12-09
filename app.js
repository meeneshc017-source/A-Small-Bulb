 
 let bulb=document.querySelector("#bulb")

 const bulbb=() =>{
     setInterval(()=>{
     bulb.classList.toggle("bulb")
},200)
 }

let startBtn=document.querySelector("#startbtn")
startBtn.addEventListener("click",()=>{
    bulbb()
})

startBtn.removeEventListener("click",()=>{
    bulbb()
});