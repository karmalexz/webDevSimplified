// const btn = document.querySelector("[data-btn]")
const input = document.querySelector("[data-input-text]")
const form = document.querySelector("[data-form]")
const link = document.querySelector("[data-link]")
// function printClick(){
//     console.log('clicked')
// }
// btn.addEventListener('click',printClick)
// btn.addEventListener('click',()=>{
//     console.log("clicked2")
// })
// btn.removeEventListener('click',printClick)
form.addEventListener("mousemove",e=>{
    console.log("submitted form")
})
input.addEventListener('input',e=>{
    console.log(e.target.value === '')
})
link.addEventListener('click',e=>{
    e.preventDefault()
    console.log("it's been clicked")
})
window.addEventListener("resize",e=>{
    e.preventDefault()
    console.log("resized")
})