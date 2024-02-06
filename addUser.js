const { createStore } = require("redux");

const ADDUSER = 'ADDUSER';

const InitialState = {
    user: ["Amit"],
    count: 1,
}

const addUserAction = (newUser) => {
   return{
    type: ADDUSER,
    payload: newUser,
   }
}

const addUserReducer = (state=InitialState, action) => { 
    switch (action.type) {
        case ADDUSER:
            return{
                user: [...state.user , action.payload],
                count: state.count + 1,
            }
           
        default:
            state;
    }
}

const store = createStore(addUserReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addUserAction("Anis"));


