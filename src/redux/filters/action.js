import {COLORCHANGED,STATUSCHANGED} from "./actionType.js"
export const colorChanged =(color,changeType) =>{
    return{
        type:COLORCHANGED,
        value:{
           color,
           changeType
        }
    }
}
export const statusChanged =(status) =>{
    return{
        type :STATUSCHANGED,
        value:status,
    }
}