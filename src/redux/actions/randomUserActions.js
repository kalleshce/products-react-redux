import axios from "axios"
import { GET_USER_DATA, GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS } from "./constants"

const getUserData = () => {
    return {
        type: GET_USER_DATA
    }
}
const getUserDataSuccess = (data) => {
    return {
        type: GET_USER_DATA_SUCCESS,
        payload: data
    }
}
const getUserDataFailure = (error) => {
    return {
        type: GET_USER_DATA_FAILURE,
        payload: error
    }
}

export const fetchUserData = () => {
    return (dispatch) => {
        dispatch(getUserData())
        axios.get('https://randomuser.me/api/')
            .then(res => dispatch(getUserDataSuccess(res.data)))
            .catch(err => dispatch(getUserDataFailure(err)))
    }
}