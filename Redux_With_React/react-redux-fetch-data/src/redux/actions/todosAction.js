import axios from "axios";
import {GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR  } from '../constant/todosConstant';

const getAllTodos = () => async (dispatch) => {
    dispatch({type: GET_TODOS_REQUEST});
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
        type: GET_TODOS_SUCCESS,
        payload : res.data
    });
    } catch (error) {
        dispatch({
            type: GET_TODOS_ERROR,
            payload : error.message
        }); 
    }
};
export default getAllTodos;