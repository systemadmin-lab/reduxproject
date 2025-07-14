import { intialState } from "./intialState"
import {ADDED,ALLCOMPLETED,CLEARCOMPLETED,COLORSELECTED,TOGGLED,DELETED} from "./actiontype"

const nextTodoId = (todos) =>{
    return todos.length > 0
    ?Math.max(...todos.map(todo =>todo.id))+1
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
                if(todo.id !== action.payload){
                    return todo;

                }
                return{
                    ...todo,
                    completed: !todo.completed
                }

            })
        case COLORSELECTED:
            const {todoId,color} =action.payload
            return state.map(todo =>{
                if(todo.id !== todoId){
                    return todo;
                }
                return{
                    ...todo,
                    color:color
                }
            } )
        case DELETED:
            return state.filter(todo => todo.id !== action.payload )

        case ALLCOMPLETED:
            return state.map(todo => {
                  return {
                    ...todo,
                    completed :true
                  }
            });

         case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed )


        default:
                break;
        
    }
}