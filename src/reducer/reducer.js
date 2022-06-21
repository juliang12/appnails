import { TYPES } from "./types";

export const initialStates ={
    db: [],
    loading: false,
} 

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
    case TYPES.DELETE_SCHEDULE:{
        const newState = action.payload;
        return{
            ...state,
            
        }
    }
    default:
        return state;
}
}

export {reducer}

