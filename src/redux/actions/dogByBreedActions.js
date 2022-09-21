import axios from "axios"
import { GET_DOG_BY_BREED, GET_DOG_BY_BREED_FAILURE, GET_DOG_BY_BREED_SUCCESS } from "./constants"

const getDogByBreed = () => {
    return {
        type: GET_DOG_BY_BREED
    }
}
const getDogByBreedSuccess = (data) => {
    return {
        type: GET_DOG_BY_BREED_SUCCESS,
        payload: data
    }
}
const getDogByBreedFailure = (error) => {
    return {
        type: GET_DOG_BY_BREED_FAILURE,
        payload: error
    }
}

export const fetchDogByBreed = (subBreed) => {
    return (dispatch) => {
        dispatch(getDogByBreed())
        axios.get(`https://dog.ceo/api/breed/${subBreed}/images/random`)
            .then(res => dispatch(getDogByBreedSuccess(res.data)))
            .catch(err => dispatch(getDogByBreedFailure(err)))
    }
}