//animate() no colour change, no transform 
$('button').click(function(){
  $('div').animate({
    width:300,
    height:600,
    // 'background-color':'red',
    left:300,
    top:200,
    'border-radius':'50%',
  },1000,'linear',function(){console.log('animation finished')})
})