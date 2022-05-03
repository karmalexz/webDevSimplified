//extends
// class Test {
//     constructor(){
//         this.a=1;
//     }
//     testa(){
//         console.log('testa')
//     }
// }
// class ChildTest extends Test{
//     testb(){
//         console.log('testb')
//     }
// }
// let obj=new Test()
// let obj1=new ChildTest()
// obj.testa()
// obj1.testa()
// obj1.testb()
import React from 'react'
class App extends React.Component{
    render(){
        return <div>hello react Component</div>
    }
}
export default App