const divWithId=document.getElementById("div-id")
divWithId.style.color="red"
const divsWithClass=document.getElementsByClassName("div-class")
console.log(divsWithClass)
const divsWithClassArray=Array.from(divsWithClass)
// divsWithClass[0].style.color="green"
divsWithClassArray.forEach(aa => {
  aa.style.color="green"
});
