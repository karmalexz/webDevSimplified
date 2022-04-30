function CreateObj (name, age){
  this.name=name
  this.age=age
}

let obj1=new CreateObj("alex",18)
let obj2=new CreateObj("eric",19)
console.log(obj1,obj2)
