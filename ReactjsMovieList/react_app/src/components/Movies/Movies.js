
import React, { useState,useEffect } from 'react';
import {get_movie_list} from '../../api/movie.js'
import Card from 'react-bootstrap/Card'
import ReactStars from "react-rating-stars-component";
const Movies = () =>{
  let [list,setList] = useState([]);

  useEffect(() => {
          async function fetchData() {
            // You can await here
            const res = await get_movie_list();
            if(res?.statusCode===200 || 0){
              setList([...res.data]);
            }
          }
          fetchData();         
  },[])
  return(
    <div className="">
    <h1>Latest Movies</h1>
    {list &&
        list.map((item,index)=>{   
         return(<Card key={index} style={{width: '25%', float:'left', 'height':"300px" ,'minHeight':"300px"}}>
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <ReactStars
              count={5}
              size={24}
              value={(item?.imdbRating)/2 || 0}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />(Vote: {item.imdbVotes})
            <Card.Text>
              Released: {item.Released}
            </Card.Text> 
            <Card.Text>
            {item.Plot.substring(0, 125)}...}
            </Card.Text>        
          </Card.Body>
        </Card>)
      })
    }
   </div>
  );
}

export default Movies;