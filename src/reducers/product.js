import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_ERROR} from '../actions';

const initialState = {
    productsList: {
        data: [],
        isLoading: false,
    }
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productsList: {
                    data: [],
                    isLoading: true,
                }
            };
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList: {
                    data: action.data,
                    isLoading: false,
                }
            };
        default:
            return state;
    }
}

export default productReducer;


