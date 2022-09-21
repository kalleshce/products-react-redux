import { GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_SUCCESS } from '../actions/constants';

const initialState = {
    isLoading: false,
    productDetailData: {},
    error: null
}

export const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL: {
            return { ...state, isLoading: true }
        }
        case GET_PRODUCT_DETAIL_SUCCESS: {
            return { ...state, productDetailData: action.payload, isLoading: true }
        }
        case GET_PRODUCT_DETAIL_FAILURE: {
            return { ...state, error: action.payload, isLoading: true }
        }
        default: return state
    }
}
