import axios from "axios"
import { GET_BREEDLIST, GET_BREEDLIST_FAILURE, GET_BREEDLIST_SUCCESS } from "./constants"

const getBreedsList = () => {
    return {
        type: GET_BREEDLIST
    }
}
const getBreedsListSuccess = (data) => {
    return {
        type: GET_BREEDLIST_SUCCESS,
        payload: data
    }
}
const getBreedsListFailure = (error) => {
    return {
        type: GET_BREEDLIST_FAILURE,
        payload: error
    }
}

export const fetchBreedData = () => {
    return (dispatch) => {
        dispatch(getBreedsList())
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => dispatch(getBreedsListSuccess(res.data)))
            .catch(err => dispatch(getBreedsListFailure(err)))
    }
}