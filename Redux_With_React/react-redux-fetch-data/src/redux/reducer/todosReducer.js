import {GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR  } from '../constant/todosConstant';

const initialState = {
    isLoading: false,
    todos: [],
    error: null
};

const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
           return{
            ... state,
            isLoading: true
           }; 
            
        case GET_TODOS_SUCCESS:
           return{
            isLoading: false,
            todos: action.payload,
            error: null
           }; 
            
        case GET_TODOS_ERROR:
           return{
            isLoading: false,
            todos: [],
            error: action.payload
           }; 
            
    
        default:
           return state;
    }
};

export default todosReducer;