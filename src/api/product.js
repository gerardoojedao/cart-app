import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import {baseUrl} from '../config/keys';
import * as Actions from '../actions';
import {showAlertError} from '../util';

export function* GetAllProducts() {
    try {
        const response = yield call(axios, {
            method: 'get',
            url: `${baseUrl}/amiibo/`
        });

        const dataWithPrices = response.data.amiibo.map((prod) => {
            //Simulate price
            prod.price = parseInt(prod.tail, 16) % 20000 + 1;
            return prod
        });

        yield put(Actions.getAllProductsSuccess(dataWithPrices))
    } catch (e) {
        const message = 'Se ha producido un error al obtener los productos';
        yield put(Actions.getAllProductsError(message));
        showAlertError(message);
    }
};
