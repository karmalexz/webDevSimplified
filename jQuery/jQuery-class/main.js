$('div').addClass('e')
$('div').removeClass('a')
var btn=document.querySelector('button')
btn.onclick=function(){
    $('div').toggleClass('box')
}