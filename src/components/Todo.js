import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import { toggoled,colorselected,deleted } from "../redux/todos/actions";

export default function Todo({todo}) {
//    console.log(todo.todo.text)
    const {text,id,completed,color}=todo
    const dispatch =useDispatch();
    const handleStatusChanged = (todoId) =>{
        dispatch(toggoled(todoId));


    }
    const handleColorChanged = (todoId,color) =>{
        console.log(todoId)
        dispatch(colorselected(todoId,color))
    }
    const handleDelted = (todoId)=>{
        dispatch(deleted(todoId))

    }
    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className= {`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'} `}>
                <input
                    type="checkbox"
                    checked={completed}
                    className="opacity-0 absolute rounded-full"
                    onChange={()=>handleStatusChanged(id)}
                    
                />
                {completed&&<svg
                    className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
}
            </div>

            <div className="select-none flex-1 line-through">
               {text}
            </div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer${color==='green'&&'border-green-500 hover:bg-green-500 bg-green-500'}`}
            onClick={()=>handleColorChanged(id,'green')}
            ></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer${color==='yellow'&&'border-yellow-500 hover:bg-yellow-500 bg-yellow-500'}`}
            onClick={()=>handleColorChanged(id,'yellow')}
            ></div>

            <div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer${color==='red'&&'border-red-500 hover:bg-red-500 bg-red-500'}`}
            onClick={()=>handleColorChanged(id,'red')}
            ></div>

            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={()=>handleDelted(id)}
            />
        </div>
    );
}
