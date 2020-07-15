import React from 'react';
import axios from 'axios';
import Movie from '../components/(6)Movie';

class Home extends React.Component{
    state={
        isLoading:true,
        movies:[]
    };

    getMovies= async() => {
        const {data: {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //console.log(movies);
        //console.log(movies.data.data.movies)
        //This is not sexy
        //so we applying ES6 like that.
       
        //this.setState({movies:movies});
       this.setState({movies:movies, isLoading:false})
    }
    //axios를 기다려야 된다는 것을 js에 알려준다.
  componentDidMount(){
    //   setTimeout(()=>{
    //       this.setState({isLoading:false, book:true })
    //   },6000)
      //movies array에 book이 없더라도 오류는 나지 않는다.
      //미래 지향적 state설정

      //사람들이 자바스크립트에서 data를 fetch를 하는 방법은 FETch를 사용하는 것
      //하지만 Axios라는 좋은 방법이 존재한다. 
      //Fetch위에 존재하는 작은 layer
      this.getMovies();
    }

    //JSX 문법이므로 {} 안에 들어가야 한다. 
    //state변수 movies를 갖고옴으로 아래의 this.state.moveis => movies로 줄일 수 있다.
    render(){
        const {isLoading, movies }=this.state; //ES6
        return (
         <div>
           <section className="container">
        {isLoading 
              ?
              <div className="loader">
                <span className="loader__text">
                  Loading...
                </span>
              </div> 
              
              :
              <div className="movies">
              {movies.map( kind => 
               <Movie 
                key={kind.id}
                id={kind.id} 
                year={kind.year} 
                title={kind.title} 
                summary={kind.summary} 
                poster={kind.medium_cover_image} 
                genres={kind.genres}
                />
              )}</div>//왜 {} 로 movie.map 부터 컴포넌트를 감싸야하나?  
                    // () => ()
        }  
          </section>
        </div>
                );     
    }
  }
                       
export default Home;
        //"Loading.." :"we are ready" 부분을 바꾼다.
/*
        Destructuring Object
        객체에서도 필요한 데이터만 뽑아서 변수로 할당할 수 있다.
        
            let obj = {
              name: 'godori',
              address: 'Guldari',
              age: 17
            }
            
            // 객체의 키 이름 값으로 새로운 변수 만들기
            let {name, age} = obj;
            
            // 다른 변수 이름으로 객체의 값을 할당 받기
            let {name:myName, age:myAge} = obj;
            
            console.log(name, age, myName, myAge); // godori, 17, godori, 17
*/

//setstate로 rendering을 해야만 비동기처리를 할 수 있다. 

//자바스크립트 클래스안에 있으면 컴포넌트 클래스에 의해 혼란스러워진다. 그래서 항상 className 으로 하는 것을 잊지 말자. 