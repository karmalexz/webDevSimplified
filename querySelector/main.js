const dataAttributeElement=document.querySelector('[data-test]')
const divsWithClasses=document.querySelectorAll('.div-class')
const input = document.querySelector("input")
divsWithClasses.forEach(div=>{
  div.style.color="green"
})
console.log(dataAttributeElement)
console.log(divsWithClasses)
input.style.backgroundColor="black"