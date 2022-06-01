$('form').on('submit',function(e){
    e.preventDefault()
    const data=$('form').serialize()
    $.post('http://localhost:8888/users/register',data, res=>{
        console.log(res)
        if(res.code===0){
            $('form>span').css("display","block")
            return
        }
        window.alert('Congrats, sign up successful, please click to go to login page')
        window.location.href='./login.html'
    })    
})