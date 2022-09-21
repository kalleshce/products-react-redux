import { GET_USER_DATA, GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    userData: {},
    error: null
}

export const randomUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA: {
            return { ...state, isLoading: true }
        }
        case GET_USER_DATA_SUCCESS: {
            return { ...state, userData: action.payload, isLoading: false }
        }
        case GET_USER_DATA_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}