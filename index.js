// Defining Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// initial state
const inistalCounterstate = {
    count: 0,
};


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

