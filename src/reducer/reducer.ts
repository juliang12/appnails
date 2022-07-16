import { Cash, Clients, TodoState } from "models/state.model";
import { TYPES } from "./types";

type stateAction = 
| {types: "LOGIN_AUTH", payload: boolean}
| {types: "CREATE_DATA", payload: TodoState}
| {types: "GET_DATA", payload: any}
| {types: "DELETE_DATA", payload: TodoState}
| {types: "GET_DATA_CLIENTS", payload: any}

const reducer = (state: TodoState, action: stateAction)=>{
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
            db: newState.map((doc:any) => ({...doc.data(), id: doc.id})),
            filtered: newState.map((doc:any) => ({...doc.data(), id: doc.id}))
        }
    }
    case TYPES.DELETE_DATA:{
        const newState = action.payload;
        return{
            ...state,
            filtered: state.db.filter((doc: Cash) => doc.id !== newState),
            db: state.db.filter((doc: Cash) => doc.id !== newState)
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
        const search = action.payload;
        const filter = state.db?.filter((value) => { return value.manicure.toLowerCase().includes(search.toLowerCase())}) 

            return{
            ...state,
             filtered:filter
            
}
    }
    case TYPES.GET_DATA_CLIENTS:{
        const newState = action.payload;

        return{
            ...state,
            clients: newState.map((doc:any) => ({...doc.data(), id: doc.id}))
        }
    }
    case TYPES.ADD_CLIENT:{
        const newState = action.payload;
        return{
            ...state,
            clients: [...state.clients, newState]
        }
    }
    case TYPES.DELETE_CLIENT:{
        const newState = action.payload;
        return{
            ...state,
            clients: state.clients.filter((client: Clients) => client.id !== newState)
        }
    }
    default:
        return state;
}
}

export {reducer}

