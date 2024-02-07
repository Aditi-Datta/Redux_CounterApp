const { createStore, combineReducers } = require("redux");

// const for Products
const GET_PRODUCTS = 'GETPRODUCTS';
const ADD_PRODUCTS = 'ADDPRODUCTS';

// const for cart
const GET_CARTS = 'GETCARTS';
const ADD_CARTS = 'ADDCARTS';

// initial Products State
const initialProductState = {
    products : ['Sugar', 'Solt'],
    numberOfProducts: 2,
}

// initial Cart State
const initialCartState = {
    cart: ['Sugar', 'Makeup', 'Icecream' ],
    numberOfCarts: 3,
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


// action creator for carts
const addCarts = (newCart) => {
    return{
        type: ADD_CARTS,
        payload: newCart,
    }
}
const getCarts = () => {
    return {
        type: GET_CARTS,
    }
}

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

// reducer for Carts
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CARTS:
            return{
                cart: [...state.cart, action.payload],
                numberOfCarts: state.numberOfCarts + 1,
            }
        case GET_CARTS: 
        return{
            ...state,
        }
    
        default:
            return state;
    }
}


// combined reducer
const rootReducer = combineReducers({
    productR:  addProductsReducer,
    cartR: cartReducer,
})


// store create
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProducts('Vegtable'));

store.dispatch(getCarts());
store.dispatch(addCarts('Soyabin'));

