// state - count=0
// increment, decrement, reset action creator function
// reducer
// store

const { createStore } = require("redux");


// constant 
const INCREMENT = 'INCREMENT';
const INCREMENTBYVALUE = 'INCREMENTBYVALUE';
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
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENTBYVALUE,
        payload: value,
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
            };
    
        case INCREMENTBYVALUE:
            return{
                ...state,
                count: state.count + action.payload,
            };
    
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            };
    
        case RESET:
            return{
                ...state,
                count: 0,
            };
    
        default:
           return state;
    }
};


// create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(15));
