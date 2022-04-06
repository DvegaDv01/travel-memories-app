// connecting to the backend and connecting to database
import axios from 'axios'; // used to make api calls

const url = 'http://localhost:5001/posts'; // points to the backend route

// all actions towards the backend will be done using redux. We will disbatch those actions
// redux will allow for scalablity
export const fetchPosts = () => axios.get(url);
