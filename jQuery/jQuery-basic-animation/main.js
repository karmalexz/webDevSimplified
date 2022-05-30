//3 parameters, 1.time, 2.linear? 3.function when finish
$("button:nth-child(1)").click(function () {
  $('div').show(1000,'linear',function(){console.log('show finished')})
});//show animation
$("button:nth-child(2)").click(function () {
  $('div').hide(1000,'linear',function(){console.log('hide finished')})
});//hide animation
$("button:nth-child(3)").click(function () {
  $('div').toggle(1000,'linear',function(){console.log('toggle finished')})

});//toggle animation
