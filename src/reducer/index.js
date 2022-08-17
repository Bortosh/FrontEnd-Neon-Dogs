import { 
    GET_DOGS, 
    GET_TEMPER, 
    ONE_DOG, 
    PAGINACION, 
    CLEAN_DOG, 
    SEARCH_BY_NAME, 
    FILTER_TEMPER, 
    FILTER_EXISTING_DOG, 
    SORT_NAME,
    SORT_WEIGHT,
    DELETE_DOG} from "../actions";

const initialState = {
    dogsPerPage: 8,
    dogs: [],
    temper: [],
    pages: 0,
    dogsToRender: [],
    dog: [],
    allDogs: [],
    dogFiltered: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };
        case GET_TEMPER:
            return {
                ...state,
                temper: action.payload
            };
            case PAGINACION:
            return {
                ...state,
                dogsToRender: state.dogs.slice(action.payload, action.payload + state.dogsPerPage)
            };
            case ONE_DOG:
                return {
                    ...state,
                    dog: action.payload
                };
            case CLEAN_DOG:
                return {
                    ...state,
                    dog: []
                };
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    dogs: action.payload
                };
            case FILTER_TEMPER:
                const alldogs = [...state.allDogs];
                const filterTemper = action.payload === 'All' ? alldogs : alldogs.filter(item => {
                    if(item.temperament) {
                        // console.log({
                        //     temperament: item.temperament,
                        //     value: item.temperament.includes(action.payload) 
                        // })
                        if(item.temperament.includes(action.payload)) {
                            return item
                        }
                    }
                    return false
                })
                // console.log('esto es filtrado de temper', action.payload)
                return {
                    ...state,
                    dogs: filterTemper
                }
            case DELETE_DOG:
                return {
                    ...state
                }
            case FILTER_EXISTING_DOG:
                if(action.payload === 'All'){
                    return {
                        ...state,
                        dogs: [...state.allDogs]
                    }
                }else if(action.payload === 'db'){
                    const data1 = [...state.allDogs].filter((perro) => perro.createInDb === true)
                    if(data1.length === 0) {
                        alert('No hay perritos en la base de datos 😭🐶')
                        return {
                            ...state,
                            dogs: [...state.allDogs]
                        }
                    }else {
                        return {
                            ...state,
                            dogs: data1
                        }
                    }
                }else{
                    const data2 = [...state.allDogs].filter((perro) => perro.createInDb === undefined)
                    return {
                        ...state,
                        dogs: data2
                    }
                }
            case SORT_NAME:
                if( action.payload === 'All'){
                    return {
                        ...state,
                        dogs: [...state.allDogs],
                    }
                }
                if(action.payload === 'asc') {
                    const data = [...state.allDogs].sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
                    // console.log('action sort name', data, state.dogs)
                    return {
                        ...state,
                        dogs: data
                    }
                } 
                const data = [...state.allDogs].sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1))
                // console.log('action sort name', data, state.dogs)
                return{
                    ...state,
                    dogs: data,
                }
            case SORT_WEIGHT:
                if( action.payload === 'All'){
                    return {
                        ...state,
                        dogs: [...state.allDogs],
                    }
                }
                if( action.payload === 'light'){
                    const data = [...state.allDogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);
                        if(pesoA > pesoB) return 1;
                        if(pesoA < pesoB) return -1;
                        else return 0;
                    })
                    // console.log('esto es small', data)
                    return {
                        ...state,
                        dogs: data
                    }
                }
                if( action.payload === 'big'){
                    const data = [...state.allDogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);
                        if(pesoA > pesoB) return -1;
                        if(pesoA < pesoB) return 1;
                        else return 0;   
                    })
                    // console.log('esto es big', data)
                    return {
                        ...state,
                        dogs: data
                    }
                }
    break;

        default: return state;
    }
}

export default rootReducer