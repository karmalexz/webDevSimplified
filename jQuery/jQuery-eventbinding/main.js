function handlerA(){console.log('i am handlerA function')}
function handlerB(){console.log('i am handlerB function')}
function handlerC(){console.log('i am handlerC function')}

$('div')
  .click(handlerA)
  .click(handlerB)
  .click(handlerC)

  //off()
// $('div').off('click') //this will off all click event
// $('div').off('click',handlerB) //this will off handlerB event

//trigger()
setInterval(function(){
  $('div').trigger('click')
},1000)