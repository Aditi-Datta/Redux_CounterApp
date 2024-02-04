// Defining Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// initial state
const inistalCounterstate = {
    count: 0,
};
const initialUserState = {
    user: [{name:'Adil'}],
}

// action creator with actions
const IncrementCounter = () => {
    return{
        type: INCREMENT,
    };
};
const DecrementCounter = () => {
    return{
        type: DECREMENT,
    };
};

const AddUser = () => {
    return{
        type: ADD_USER,
        payload: {name:'Amit'},
    }
}
