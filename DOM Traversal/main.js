const grandParent = document.querySelector("#grand-parent")
grandParent.style.color="red"
const parentOne=grandParent.children[0]
const parentTwo=parentOne.nextElementSibling
const childOne=parentOne.children[0]
const childTwo=parentOne.children[1]

parentOne.style.color="green"
parentTwo.style.color="orange"
childOne.style.color="pink"
childTwo.style.color="hotpink"
// const parentOne=document.querySelector("#parent-one")
// parentOne.style.color="red"
// parentOne.closest(".test").style.color="blue"
//closest is looking "UP" -> parents.