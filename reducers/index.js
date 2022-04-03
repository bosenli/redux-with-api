import { combineReducers } from "redux";
import postsReducer from './postsReducers'


//purpose and used case : update the state
// when we have multiple reducers,
//for example, post reducers, comment reducers, like reducers, need to combine them



const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer