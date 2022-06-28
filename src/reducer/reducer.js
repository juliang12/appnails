import { TYPES } from "./types";

const reducer = (state, action)=>{
switch (action.types) {
    case TYPES.CREATE_DATA:
        return{
            ...state,
            db: [...state.db, action.payload]
    }; 
    case TYPES.GET_DATA:{
        const newState = action.payload
        return{
            ...state,
            db: newState.map(doc => ({...doc.data(), id: doc.id}))
        }
    }
    case TYPES.DELETE_DATA:{
        const newState = action.payload;
        return{
            ...state,
            db: state.db.filter(doc => doc.id !== newState)
        }
    }
    case TYPES.LOGIN_AUTH:{
        const newState = action.payload;
        return{
            ...state,
            user: newState
            
        }
    }
    case TYPES.DELETE_ALL_DATA: 
        return{
            ...state,
            db: []
        }
    default:
        return state;
}
}

export {reducer}

