 
 let bulb=document.querySelector("#bulb")

 const bulbb=() =>{
     setInterval(()=>{
     bulb.classList.toggle("bulb")
},200)
 }

let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    bulbb()
})

btn.removeEventListener("click",()=>{
    bulbb()
});