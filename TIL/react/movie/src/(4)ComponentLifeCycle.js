import React from "react"

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        console.log("hello");
        //constructor란 자바에서 class를 생성할 때 만들어지는 것.
        //자바스크립트이다. 
    }
    state = {
        count:0
    };
      
    add = () => {
 
        this.setState({count:this.state.count+1})
       //이렇게 쓰는걸 권장하지는 않는다. 하지만 react는 똑똑하기 때문에 안다.
        //current를 사용하기를 
    };
    minus = () => {
        this.setState(current => ({count:current.count-1}));
    };
    componentDidMount(){
        console.log("Component rendered");
    }
    componentDidUpdate(){
        console.log("I'm just updated");
    }
//라이프 사이클 메소드란 ?
//컴포넌트가 생성이 될때 렌더 되기전에 생성되는 것이 있다. 
//Mount, Update, Unmount 컴포넌트에 대한 콜들이 존재
    render(){
        console.log("I'm rendering");
        return (
        <div>
        <h1> Im a class component {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        </div>
        ); 
   
    }
}
export default LifeCycle;

