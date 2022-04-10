// Covers using Redux to dispath an action from the data from our backend

import * as api from '../api';

// Action Creators are functions that return an action
// An action is an object that has a type and a payload

// With redux Thunk we have to add an async dispath function in front of the 'getPosts' Action Creator
// since we are dealing with asyncronous logic
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        // instead of return a function, you have to dispatch it
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log(error.message);

    }



    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error)

    }
}