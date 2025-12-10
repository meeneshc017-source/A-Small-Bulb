 
 let bulb=document.querySelector("#bulb")
 let startBtn=document.querySelector("#startbtn")
 let offBtn=document.querySelector("#offbtn")
 const bulbb=() =>{
     setInterval(()=>{
         bulb.classList.toggle("bulb")
     },400)
 }


startBtn.addEventListener("click", ()=> {
   bulbb()
})
 


// offBtn.removeEventListener("click",()=>{
//    bulbb()
// });
offBtn.addEventListener("click", () =>{
      startBtn.removeEventListener("click",()=> {
        bulbb()
})   
});
      
    