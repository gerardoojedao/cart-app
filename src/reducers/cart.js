import {ADD_PRODUCT, DELETE_ALL_PRODUCTS, DELETE_PRODUCT} from '../actions';

const initialState = {
    products: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            let prod = state.products;
            prod.push(action.product);
            return {
                products: prod
            };
        }

        case DELETE_PRODUCT:
            let prod = state.products.filter(prod => prod.tail !== action.product.tail);
            return {
                products: prod,
            };

        case DELETE_ALL_PRODUCTS:
            return {
                products: [],
            };
        default:
            return state;
    }
}

export default cartReducer;


