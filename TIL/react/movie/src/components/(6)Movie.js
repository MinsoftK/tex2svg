import React from 'react'
import protoTypes from 'prop-types'
import './style.css'

//state가 필요 없는 경우에는 class로 작성할 필요가 없다.
function Movie({ year, title, summary, poster,genres}){
    return (
    <div className="movie">
        <img className="movie_image" src={poster} alt={title} title={title}/>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres_Array">            
            {genres.map((genres,index) =>(
                <li key={index} className="movie_genre">
                    {genres}
                </li>
            )//넣을만한 key가 없지만 map에서 제공하는 index를 이용해서 넣을 수 있다.
        ) }
        </ul>
        <p className="movie_summary">{summary.slice(0,140)}</p>
    
    </div>
    );
}
// pros {} 를 빼먹음....
//map( kind => ()
//자바스크립트에서의 for는 loop이다 따라서 htmlfor라고 써한다.

Movie.prototypes={
    id:protoTypes.number.isRequired,
    year:protoTypes.number.isRequired,
    title:protoTypes.string.isRequired,
    summary:protoTypes.string.isRequired,
    poster:protoTypes.string.isRequired,
    genres:protoTypes.arrayOf(protoTypes.string).isRequired
}

export default Movie;
