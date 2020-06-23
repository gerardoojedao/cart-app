export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
};

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        product
    }
};

export const deleteAllProducts = () => {
    return {
        type: DELETE_ALL_PRODUCTS,
    }
};
