import axios from "axios"
import { GET_RANDOM_IMAGE, GET_RANDOM_IMAGE_FAILURE, GET_RANDOM_IMAGE_SUCCESS } from "./constants"

const getDogImage = () => {
    return {
        type: GET_RANDOM_IMAGE
    }
}
const getDogImageSuccess = (data) => {
    return {
        type: GET_RANDOM_IMAGE_SUCCESS,
        payload: data
    }
}
const getDogImageFailure = (error) => {
    return {
        type: GET_RANDOM_IMAGE_FAILURE,
        payload: error
    }
}

export const fetchRandomImage = () => {
    return (dispatch) => {
        dispatch(getDogImage())
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => dispatch(getDogImageSuccess(res.data)))
            .catch(err => dispatch(getDogImageFailure(err)))
    }
}