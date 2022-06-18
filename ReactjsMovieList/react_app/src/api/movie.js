import axios from 'axios';

export const get_movie_list = () =>{
	return axios.get(`http://localhost:5000/api/movies`)
	  .then(res => {
	    return res.data;
	})
}
