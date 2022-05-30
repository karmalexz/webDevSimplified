// 1.url
// 2.method - default:GET
// 3.data -default: ""- parameters for backend
// 4.async - default: true
// 5.success
// 6.error
$.ajax({
  url:'http://localhost:8888/test/first',
  success:function(res){
    console.log(res)
  }
})

$.ajax({
  url:'http://localhost:8888/test/third',
  data:{name:'Alex',age:18},
  success:function(res){
    console.log(res)
  }
})

$.ajax({
  url:'http://localhost:8888/test/third',
  method:'POST',
  data:{name:'Alex',age:18},
  success:function(res){
    console.log(res)
  }
})

$.ajax({
  url:'http://localhost:8888/test/fourth',
  method:'POST',
  async:false,
  data:{name:'Alex',age:18},
  success:function(res){
    console.log(res)
  }
})