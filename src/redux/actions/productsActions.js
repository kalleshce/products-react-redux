import axios from 'axios'
import { GET_PRODUCTS_DATA, GET_PRODUCTS_DATA_FAILURE, GET_PRODUCTS_DATA_SUCCESS } from './constants'


const getProducts = () => {
    return {
        type: GET_PRODUCTS_DATA
    }
}
const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_DATA_SUCCESS,
        payload: data
    }
}
const getProductsFailure = (error) => {
    return {
        type: GET_PRODUCTS_DATA_FAILURE,
        payload: error
    }
}

export const getProductsData = () => {
    return (dispatch) => {
        dispatch(getProducts())
        axios.get('https://fakestoreapi.com/products')
            .then(res => dispatch(getProductsSuccess(res.data)))
            .then(err => dispatch(getProductsFailure(err)))
    }
}