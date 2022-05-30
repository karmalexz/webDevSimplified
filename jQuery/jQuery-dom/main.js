//1. ON
// $('div').on('click',function(){
//     console.log('i am div dom')
// })
//event-delegation
// $('div').on('click','p',function(){
//     console.log('i am div dom-delegation')
// })
//batch dom -no delegation
// $("div").on({
//     click:function(){console.log("click event")},
//     mouseover:function(){console.log("over event")},
//     mouseout:function(){console.log("out event")},
// })

//2. ONE - can on trigger once
// $('div').one('click',function(){console.log('basic dom')})

//one delegation
// $('div').one('click','p',function(){console.log('one delegation')})
//one batch
// $("div").one({
//     click:function(){console.log("click event")},
//     mouseover:function(){console.log("over event")},
//     mouseout:function(){console.log("out event")},
// })

//3. HOVER a special event in jQuery, no delegation

// $('div').hover(
//     function(){console.log('function1')}, //in
//     function(){console.log('function2')}  //out
//     )

//4. click(),mouseover(),mouseout(),change()....

$("div").click(function () {
  console.log("clicked");
});
