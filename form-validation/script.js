const form=document.querySelector("#form")
const username=document.querySelector("#username")
const password=document.querySelector("#password")
const passwordConfirm=document.querySelector("#password-confirmation")
const terms=document.querySelector("#terms")
const errorsList=document.querySelector(".errors-list")
const errorsContainer=document.querySelector(".errors")

form.addEventListener("submit",e=>{
  const errorMessages = []
  clearErrors()
  if(username.value.length < 6){
    errorMessages.push('Username must be at least 6 characters')
  }
  if(password.value.length < 10){
    errorMessages.push('Password must be at least 10 characters')
  }
  if(password.value !== passwordConfirm.value){
    errorMessages.push("Passwords must match.")
  }
  if(terms.checked ==false){
    errorMessages.push("Terms must be agreed")
  }
  console.log(errorMessages)
  if(errorMessages.length>0){
    e.preventDefault()
    showErrors(errorMessages)
  }
  
})
function clearErrors() {
  while(errorsList.children[0]!= null){
    errorsList.removeChild(errorsList.children[0])
  }
  errorsContainer.classList.remove("show")
}

function showErrors(errorMessages) {
  errorMessages.forEach(errorMessage => {
    const li=document.createElement("li")
    li.innerText=errorMessage
    errorsList.appendChild(li)
  })
  errorsContainer.classList.add("show")
}