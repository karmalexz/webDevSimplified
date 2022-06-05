let car={
    make:'bmw',
    year:2011,
    color:'red'
}
console.log(car)
let carJson=JSON.stringify(car)
console.log(carJson)
let carJs=JSON.parse(carJson)
console.log(carJs)
