// const { createStore } = require("redux");

// // Defining Constants
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// // initial state
// const inistalCounterstate = {
//     count: 0,
// };


// // action creator with actions
// const IncrementCounter = () => {
//     return{
//         type: INCREMENT,
//     };
// };
// const DecrementCounter = () => {
//     return{
//         type: DECREMENT,
//     };
// };

// // create reducer for counter
// const counterReducer = (state = inistalCounterstate, action) => {
//     switch (action.type) {
//         case INCREMENT:
//         return{
//             ...state,
//             count: state.count + 1
//         };   

//         case DECREMENT:
//             return{
//                 ...state,
//                 count: state.count - 1
//             }; 
    
//         default:
//             return state;
//     }
// };

// // create Store
// const store = createStore(counterReducer);
// store.subscribe(() => {
//     console.log(store.getState());
// })

// //dispatch action
// store.dispatch(IncrementCounter());