//stop()
$('button:nth-child(1)').click(function(){
  $('div').toggle(2000)
})
$('button:nth-child(2)').click(function(){
  $('div').stop() //it will stop where it is at. normally it is => $('div').stop().toggle(2000)
})

//finish()
$('button:nth-child(3)').click(function(){
  $('div').finish() //it will stop where it is at. normally it is => $('div').stop().toggle(2000)
})