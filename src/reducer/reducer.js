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
            db: newState.map(doc => ({...doc.data(), id: doc.id})),
            filtered: newState.map(doc => ({...doc.data(), id: doc.id}))
        }
    }
    case TYPES.DELETE_DATA:{
        const newState = action.payload;
        return{
            ...state,
            filtered: state.db.filter(doc => doc.id !== newState),
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
    case TYPES.SEARCH_DATA:{
        const newState = state.db.filter(item => { return item.manicure.toLowerCase().includes(action.payload.toLowerCase())}) 

        
            return{
            ...state,
            filtered: newState
            }
            
    }
    default:
        return state;
}
}

export {reducer}

