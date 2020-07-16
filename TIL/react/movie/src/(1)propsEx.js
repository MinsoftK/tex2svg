import React from 'react';


//Pros 의 개념 !!!
// props의 객체를 가져온다 
// props.fav = fav 와 같은 쓰임이다.
//하나의 Component는 Uppper case로 선언이 돼야함.
//props란  component에 넣게 되는 것. food의 argument로 들어가게 된다.
// function Food({fav}){
//   console.log(fav);
//   return <h1>I'm {fav}</h1>;
// }
/*
function App() {
  return (
    <div className="App">
      Hello!!!
      <Food 
      fav="kimchi" 
      something={true}
      papa={["hello",1,2,3]}
      />
      <Food 
      fav="ramen" 
      something={true}
      papa={["hello",1,2,3]}
      />
      <Food 
      fav="samgyup" 
      something={true}
      papa={["hello",1,2,3]}
      />
    </div>
  );
}
*/

// 위에는 굉장히 비효율적이다. 왜냐하면 데이터를 일일히 객체에 집어넣야하기 때문이다. 음식 컴포넌트에 .
// 그래서 정보를 알 수 없을때 웹사이트의 동적 데이터를 받아와야한다. 
//map 은 array의 각 item에서 function을 실행하는 array를 가지는 자바스크립트 함수이며 그 function의 결과를 갖는 array를 나한테 준다.


const foodLike=[
  {
    id:1,
    name: "ramen",
    image:"https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg"},
  {
    id:2,
    name:"kimbab",
    image:"https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG"
  }
];

function Food({ name, picture } ){
  return(
    <div>my Favorite food is {name}
    <br/>
    And This is the Picure URL

    <img src={picture} alt={name}/>
    </div>
    );
}

//foodLike라고 쓰면text
//{foodLike}는 JS
//food라는건 object이다. array의 각각의 아이템을 의미한다.
//Food component 안에 정보를 채워 넣는다.
/*
function renderFood(dish){
  console.log(dish)
  return <Food name={dish.name} picture={dish.image}/>
}
*/
function App(){
  return(
  <div>
    {foodLike.map(food => (
    <Food key={food.id} name={food.name} picture={food.image}/>
    ))}
    </div>
 
//!!!! 왜 each child in a list should have a unique "key" prop가 발생?
// 모든 react의 element는 유일해야 한다. <div></div> 안에 다 들어가야함.
//id 값을 부여한후 key값을 넣어주면 오류가 사라진다.

 /*
   아래와 같이 함수화 
<div>
  {foodLike.map(renderFood)}
</div>
*/
);
}


export default App;
 