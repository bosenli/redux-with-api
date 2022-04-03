import axios from 'axios';
// create Redux action types

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

//  create Redux action creators that return an action

export const getPosts = ()=>({
    type: GET_POSTS,
})
export const getPostsSuccess = (posts)=>({
    type: GET_POSTS_SUCCESS,
    payload : posts,
})
export const getPostsFailure = ()=>({
    type: GET_POSTS_FAILURE,
})

// combine them all in an async thunk

export function fetchPosts(){
    return async (dispatch) => {  //dispatch update state
        dispatch(getPosts()) // starting , getting the post info
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(getPostsSuccess(response.data)) // if success update state
            console.log('debug',response.data[1])
        }catch(error) {
            dispatch(getPostsFailure())
        }
        
    }
}

//then goto postsReducers.js