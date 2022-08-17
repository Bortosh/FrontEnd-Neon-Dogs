import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'
export const GET_TEMPER = 'GET_TEMPER'
export const PAGINACION = 'PAGINACION'
export const ONE_DOG = 'ONE_DOG'
export const CLEAN_DOG = 'CLEAN_DOG'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const FILTER_TEMPER = 'FILTER_TEMPER'
export const SORT_NAME = 'SORT_NAME'
export const SORT_WEIGHT = 'SORT_WEIGHT'
export const FILTER_EXISTING_DOG = 'FILTER_EXISTING_DOG'
export const DELETE_DOG = 'DELETE_DOG'

export function getDogs() {
    return async function(dispatch) {
        const json = await axios ('https://mysterious-mesa-86352.herokuapp.com/dogs')
        const data = json.data
        return dispatch({
            type: GET_DOGS,
            payload: data
        })
    }
}

export function getTemper() {
    return async function(dispatch) {
        const json = await axios ('https://mysterious-mesa-86352.herokuapp.com/temperaments')
        return dispatch({
            type: GET_TEMPER,
            payload: json.data
        })
    }
}

export function paginacion(payload) {
    return async function(dispatch) {
        return dispatch({
            type: PAGINACION,
            payload: payload
        })
    }
}

export function getOneDog(id) {
    return async function(dispatch) {
        const json = await axios (`https://mysterious-mesa-86352.herokuapp.com/dogs/${id}`)
        const data = await json.data
        return dispatch({
            type: ONE_DOG,
            payload: data
        })
    }
}

export function searchByName(name) {
    return async (dispatch) => {
        try {
            const res = await axios('https://mysterious-mesa-86352.herokuapp.com/dogs?name='+name)
            const data = await res.data
                return dispatch({
                    type: SEARCH_BY_NAME,
                    payload: data
                })
        } catch (error) {
            alert('Dog Not Found')
        }
    }
}

export function filterTemper(payload) {
    return {
        type: FILTER_TEMPER,
        payload
    }
}

export function postDogs(payload) {
    return async function() {
        const create = await axios.post('https://mysterious-mesa-86352.herokuapp.com/dogs',payload);
        return create
    }
}

export function cleanDog() {
    return {
        type: CLEAN_DOG
    }
}

export function sortName(payload) {
    return {
        type: SORT_NAME,
        payload
    }
}

export function sortWeight(payload) {
    return {
        type: SORT_WEIGHT,
        payload
    }
}

export function filterExistingDog(payload) {
    return {
        type: FILTER_EXISTING_DOG,
        payload
    }
}

export function deleteDog(payload) {
    return async (dispatch) => {
        const data = await axios.delete('https://mysterious-mesa-86352.herokuapp.com/dogs/'+ payload);
        console.log("🚀 ~ file: index.js ~ line 118 ~ return ~ data", data)
        return dispatch ({
            type: DELETE_DOG
        })
    }
}




























































































        // export function getOneDog(id) {
        //     return async function(dispatch) {
        //         const json = axios (`https://mysterious-mesa-86352.herokuapp.com/dogs/` + id)
        //         return dispatch({
        //             type: ONE_DOG,
        //             payload: json.data
        //         })
        //     }
        // }