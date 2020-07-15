import React from "react";
import propTypes from "prop-types"


const foodLike=[
    {
    id:1,
    name: "ramen",
    image:"https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating:5.0
    },
    {
      id:2,
      name:"kimbab",
      image:"https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating:4.9
    }
  ];
  
//prop type이 잘못됐을때 알려주는 prop-types를 통해 알려준다.
//내가 원하는 props인지 알려준다.
function Food({ name, picture, rating } ){
    return(
      <div>my Favorite food is {name}
      <br/>
      And This is the Picure URL
      <img src={picture} alt={name}/>
      <br/>
        <div>
      this rating is {rating}/5.0
        </div>
      </div>
      );
  }
  
Food.propTypes ={ 
    name :propTypes.string.isRequired,
    picture:propTypes.string.isRequired,
    rating:propTypes.number.isRequired
}

//CheckProps() { return }  {}? in ES6
function CheckProps(){
  return(
  <div>
    {foodLike.map(food => (
    <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/>
    ))}
    </div>
    );
}


export default CheckProps;