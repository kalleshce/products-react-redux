import { GET_BREED_DATA, GET_BREED_DATA_FAILURE, GET_BREED_DATA_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    breedImageData: {},
    error: null
}

export const dogsByBreedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREED_DATA: {
            return { ...state, isLoading: true }
        }
        case GET_BREED_DATA_SUCCESS: {
            return { ...state, breedImageData: action.payload, isLoading: false }
        }
        case GET_BREED_DATA_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}