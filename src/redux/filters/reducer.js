import {COLORCHANGED,STATUSCHANGED} from "./actionType.js"
import {intialState} from "./intialStatus.js"
const reducer =(state=intialState,action)=>{
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status:action.payload
            }
            
        case COLORCHANGED:
            const {color,changeType} =action.payload
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors:[
                            ...state.colors,
                            color

                        ]
                    }
                    case 'removed':
                        return{
                            ...state,
                            colors:state.colors.filter(existingColor => existingColor !== color)
                        }
                    
            
                default:
                    return state;
            }


        default:
            break;
    }
}