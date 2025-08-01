import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/action";
import { colorChanged } from "../redux/filters/action.js";

const NumberofTodos=(no_of_todos) =>{
    switch(no_of_todos){
        case 0:
            return 'no task ';
        case 1:
            return '1 task';
        default:
            return `${no_of_todos} tasks`
    }
    
}

export default function Footer() {
    const dispatch =useDispatch()
    const todos= useSelector((state)=>state.todos)
    const filters=useSelector((state)=>state.filters)
    const todosRemaining =todos.filter(todo => !todo.completed).length
    const {status,colors}=filters

    const handleStatusChange =(status) =>{
        dispatch(statusChanged(status))
    }
    const handleColorChange =(color)=>{
        if (colors.include(color)){
             dispatch(colorChanged(color,'removed'))
        }else{
            dispatch(colorChanged(color,'added'))
        }
       

    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{NumberofTodos(todosRemaining)}  left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && ' font-bold'}`}
                onClick={()=>handleStatusChange('All')}
                >All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && ' font-bold'}`}
                 onClick={()=>handleStatusChange('Incomplete')}
                >Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && ' font-bold'}`}
                onClick={()=>handleStatusChange('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                onClick={()=>handleColorChange('green')}
                ></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                onClick={()=>handleColorChange('red')}
                ></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                onClick={()=>handleColorChange('yellow')}
                ></li>
            </ul>
        </div>
    );
}
