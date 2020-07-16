import React from "react";
//import propsTypes from "prop-types";
/*
state란 보통 우리가 동적 데이터와 함께 작업할 때 만들어진다,
변하는 데이터, 존재하지 않는 데이터, 생겨나고 사라지고 또는 벼경된 데이터
하나였던 데이터가 2개가 되고 -> dynamic data
우리는 state가 필요하다.
state를 쓰려면 class component를 써야하지만
Hooks를 사용해야할때는 function component를 사용해야 한다.
*/

//function App(){return ( );} function component


//react component이다. react 컴포넌트가 많은 것을 가지고있다.
//그 중 하나가 state
//모든 것을 구현하고 싶지는 않고 필요할때 extends를 한다.
//애기 -> 사람 , cell phone -> 삼성
//react 컴포넌트가 app의 정보를 가져옴
//function이 아니기 때문에 render 메소드를 가진다.
//extends를 했기 때문에 App에서도 render 메소드를 가진다.
class Checkstate extends React.Component{
    state = {
        count:0
    };
        //state는 object이다. 컴포넌트의 데이타를 넣을 공간이 있고 데이터는 변한다.
        //하지만 Checkstate에서 데이터를 어떻게 바꿀것인가?
    add = () => {
        //this.setState({count:1})
        this.setState({count:this.state.count+1})
        //이렇게 쓰는걸 권장하지는 않는다. 하지만 react는 똑똑하기 때문에 안다.
        //current를 사용하기를 
    };
    minus = () => {
        this.setState(current => ({count:current.count-1}));
    };
    //state를 set할대 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
    //setstate를 할때마다 react는 render를 다시 한다.
    render(){
        return (
        <div>
        <h1> Im a class component {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        </div>
        );
        //this.add 는 onclick일때만 add()는 immediatly
        //만약에 class 내에서 state의 상태를 변경하면 
        //react는 render를 refresh 하지 않는다.
        //따라서 render안에서 state를 변경해줘야 한다.
    }
}
export default Checkstate;
//클래스 컴포넘트를 쓰는 이유는 state 때문이다. 
