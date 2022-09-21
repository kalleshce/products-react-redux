import { GET_BREEDLIST, GET_BREEDLIST_FAILURE, GET_BREEDLIST_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    breedListData: {},
    error: null
}

export const breedListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREEDLIST: {
            return { ...state, isLoading: true }
        }
        case GET_BREEDLIST_SUCCESS: {
            return { ...state, breedListData: action.payload, isLoading: false }
        }
        case GET_BREEDLIST_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}