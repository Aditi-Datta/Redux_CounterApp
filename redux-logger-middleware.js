const { createStore, applyMiddleware} = require("redux");
const {default: logger} = require ('redux-logger');

// const for Products
const GET_PRODUCTS = 'GETPRODUCTS';
const ADD_PRODUCTS = 'ADDPRODUCTS';


// initial Products State
const initialProductState = {
    products : ['Sugar', 'Solt'],
    numberOfProducts: 2,
}



// action creator for Products
const addProducts = (newProduct) => {
    return{
        type: ADD_PRODUCTS,
        payload: newProduct
    };
};
const getProducts = () => {
    return{
        type: GET_PRODUCTS,
    };
};



// reducer for Products
const addProductsReducer = (state = initialProductState , action) => {
    switch (action.type) {
        case ADD_PRODUCTS: 
            return{
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        case GET_PRODUCTS: 
            return {
                ...state,
            }
    
        default:
            return state;
    }
}



// store create
const store = createStore(addProductsReducer, applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProducts('Vegtable'));





