import axios from 'axios';
import { GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_SUCCESS } from './constants';

const getProduct = () => {
    return {
        type: GET_PRODUCT_DETAIL
    }
}
const getProductSuccess = (data) => {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        payload: data
    }
}
const getProductFailure = (error) => {
    return {
        type: GET_PRODUCT_DETAIL_FAILURE,
        payload: error
    }
}

export const getProductDetail = (id) => {
    return (dispatch) => {
        dispatch(getProduct())
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => dispatch(getProductSuccess(res.data)))
            .catch(err => dispatch(getProductFailure(err)))
    }
}