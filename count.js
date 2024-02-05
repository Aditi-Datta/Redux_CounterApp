// state - count=0
// increment, decrement, reset action creator function
// reducer
// store

const { createStore } = require("redux");


// constant 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const InitialState = {
    count: 0
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounterAction = () => {
    return {
        type: RESET,
    };
};


// create reducer
const counterReducer = (state= InitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
    
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            }
    
        case RESET:
            return{
                ...state,
                count: 0,
            }
    
        default:
            state;
    }
};


// create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());