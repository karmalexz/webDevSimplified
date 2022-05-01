let loginForm=document.querySelector('form')
let usernameInput=document.querySelector('.username')
let passwordInput=document.querySelector('.password')
let error=document.querySelector('.error')

loginForm.onsubmit = function(e){
  e.preventDefault()
  //get value of username and password
  let name=usernameInput.value
  let pwd=passwordInput.value
  //make sure they are filled in
  if(!name||!pwd)return alert("please enter username or password")
  console.log(name,pwd)
  //ajax
  var xhr=new XMLHttpRequest()
  xhr.open('POST','http://localhost:8888/users/login',true)
  xhr.onload = function(){
    let res=JSON.parse(xhr.responseText)
    console.log(res)
    if(res.code ===0){
      //success
      error.style.display='block'
    }else{
      //fail
      window.location.href='./home.html'
    }
  }
  xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
  xhr.send('username='+ name +'&password='+pwd)
}