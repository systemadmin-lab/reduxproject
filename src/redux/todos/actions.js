import {ADDED,ALLCOMPLETED,CLEARCOMPLETED,COLORSELECTED,ALLCOMPLETED,TOGGLED,DELETED} from "./actiontype"
export const added =(todotext) =>{
  return{
      type:ADDED,
    payload:todotext
  }

}
export const toggoled =(todoid)=>{
    return{
        type:TOGGLED ,
        payload:todoid,
    }
}
export const colorselected =(color,todoid) =>{
    return{
        type :COLORSELECTED,
        payload:{
            todoid,
            color,
        }

    }
}
export const deleted =(todoid)=>{
    return{
        type:DELETED ,
        payload:todoid,
    }
}
export const allcompleted =() =>{
    return{
        type:ALLCOMPLETED
    }
} 
export const clearcompleted =() =>{
    return{
        type:CLEARCOMPLETED
    }
} 