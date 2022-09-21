import { GET_PRODUCTS_DATA, GET_PRODUCTS_DATA_FAILURE, GET_PRODUCTS_DATA_SUCCESS } from '../actions/constants'

const initialState = {
    isLoading: false,
    productsData: [],
    error: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_DATA: {
            return { ...state, isLoading: true }
        }
        case GET_PRODUCTS_DATA_SUCCESS: {
            return { ...state, productsData: action.payload, isLoading: false }
        }
        case GET_PRODUCTS_DATA_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}