import { FETCH_POSTS } from '../actions/index';
import { FETCH_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case FETCH_POSTS:
            console.log('in FETCH_POSTS case in reducer');
            return { ...state, all: action.payload.data};
        case FETCH_POST:
            console.log();
            return { ...state, post: action.payload.data}
        default:
            console.log('in default case in reducer');
            return state;
    }
}
