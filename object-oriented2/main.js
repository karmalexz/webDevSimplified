function Tabs(element){
    this.element=document.querySelector(element)
    this.btns=this.element.querySelectorAll('ul>li')
    this.tabs=this.element.querySelectorAll('ol>li')
}
Tabs.prototype.change=function(){
    let _this=this;

    // console.log(this.btns)
    for(let i=0;i<this.btns.length;i++){
        this.btns[i].setAttribute('index',i)
        this.btns[i].addEventListener('click',function(){
            for(let j=0;j<_this.btns.length;j++){
                _this.btns[j].className = ''
                _this.tabs[j].className= ''
            }
        this.className='active'
        let index=this.getAttribute('index')
        _this.tabs[index].className='active'
        })
    }
}
let t=new Tabs("#box")
t.change()
console.log(t)

