import { GET_RANDOM_IMAGE, GET_RANDOM_IMAGE_FAILURE, GET_RANDOM_IMAGE_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    dogImageData: {},
    error: null
}

export const dogImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_IMAGE: {
            return { ...state, isLoading: true }
        }
        case GET_RANDOM_IMAGE_SUCCESS: {
            return { ...state, dogImageData: action.payload, isLoading: false }
        }
        case GET_RANDOM_IMAGE_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}