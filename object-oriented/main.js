// function CreateObj (name, age){
//   this.name=name
//   this.age=age
//   this.sayHi=function(){console.log("say hi")}
// }

// let obj1=new CreateObj("alex",18)
// let obj2=new CreateObj("eric",19)
// console.log(obj1,obj2)

function Person (name, age){
  this.name=name
  this.age=age
}
Person.prototype.sayHi=function(){
  console.log("say hi")
}
let person1=new Person("alex",16)
let person2=new Person("eric",17)
person1.sayHi()
person2.sayHi()
console.log(person1.name)