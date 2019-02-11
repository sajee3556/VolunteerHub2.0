import axios from 'axios';
import {ADD_POST, DELETE_POST, GET_POST, GET_POSTS, UPDATE_POST} from "./types";

export const getPosts = () => async dispatch => {
    const res = await axios.get('http://localhost:8080/posts');
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
};

export const deletePostsById = id => async dispatch => {
    axios.delete(`http://localhost:8080/posts/${id}`)
        .then(res => dispatch({type: DELETE_POST, payload: id}));
};

export const addPost = post => async dispatch => {
    const res = await axios.post('http://localhost:8080/posts', post);
    dispatch({
        type: ADD_POST,
        payload: res.data
    });
};

export const getPost = id => async dispatch => {
    const res = await axios.get(`http://localhost:8080/posts/${id}`);
    dispatch({
        type: GET_POST,
        payload: res.data
    });
};

export const updatePost = (updatePost) => async dispatch => {
    const res = await axios.put(`http://localhost:8080/posts/${updatePost.id}`, updatePost);
    dispatch({
        type: UPDATE_POST,
        payload: res.data
    });
};