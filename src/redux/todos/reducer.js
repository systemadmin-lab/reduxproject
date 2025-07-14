import { intialState } from "./intialState"
import {ADDED,ALLCOMPLETED,CLEARCOMPLETED,COLORSELECTED,TOGGLED,DELETED} from "./actiontype"

const nextTodoId = (todos) =>{
    return todos.length > 0
    ?Math.max(...todos.map(todo =>todo.id)+1)
    :1
     
}

const reducer =(state=intialState, action) =>{
    switch(action.type){
        case ADDED:
            return[
                ...state,
                {
                   id:nextTodoId(state)
                }
            ]
        case TOGGLED:
            return state.map(todo =>{
                
            })














            default:
                break;
        
    }
}