import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const root_url = 'http://reduxblog.herokuapp.com/api';
const api_key = '?key=rajusblogposts';

export function fetchPosts(){

    const request = axios.get(`${root_url}/posts${api_key}`);

    console.log(request);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(fields){
    const request = axios.post(`${root_url}/posts${api_key}`, fields);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){

    const request = axios.get(`${root_url}/posts/${id}${api_key}`);

    return{
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id){

    const request = axios.delete(`${root_url}/posts/${id}${api_key}`);

    return {

        type: DELETE_POST,
        payload: request
    };
}