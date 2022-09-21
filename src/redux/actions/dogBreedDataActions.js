import axios from "axios"
import { GET_BREED_DATA, GET_BREED_DATA_FAILURE, GET_BREED_DATA_SUCCESS } from "./constants"

const getDogBreedImage = () => {
    return {
        type: GET_BREED_DATA
    }
}
const getDogBreedImageSuccess = (data) => {
    return {
        type: GET_BREED_DATA_SUCCESS,
        payload: data
    }
}
const getDogBreedImageFailure = (error) => {
    return {
        type: GET_BREED_DATA_FAILURE,
        payload: error
    }
}

export const fetchBreedImage = () => {
    return (dispatch) => {
        dispatch(getDogBreedImage())
        axios.get('https://dog.ceo/api/breed/labrador/images')
            .then(res => dispatch(getDogBreedImageSuccess(res.data)))
            .catch(err => dispatch(getDogBreedImageFailure(err)))
    }
}