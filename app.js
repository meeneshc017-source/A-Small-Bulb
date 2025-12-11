 
 let bulb=document.querySelector("#bulb")
 let startBtn=document.querySelector("#startbtn")
 let offBtn=document.querySelector("#offbtn")

 let intervalId; // store interval ID

//  const bulbb=() =>{
//      setInterval(()=>{
//          bulb.classList.toggle("bulb")
//      },400)
//  }

const bulbb = () => {
    // If interval already running → do not start again
    if (intervalId) return;

    intervalId = setInterval(() => {
        bulb.classList.toggle("bulb")
    }, 400)
}

startBtn.addEventListener("click", ()=> {
   bulbb()
})
 


// offBtn.removeEventListener("click",()=>{
//    bulbb()
// });
// offBtn.addEventListener("click", () =>{
//       startBtn.removeEventListener("click",()=> {
//         bulbb()
// })   
// });
    

offBtn.addEventListener("click", () => {
    clearInterval(intervalId) // stop blinking
    intervalId = null         // reset so start button can work again
})
    