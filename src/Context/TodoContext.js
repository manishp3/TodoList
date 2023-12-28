import  {createContext,useContext} from 'react'

export const TodoContext=createContext({
    todos:[
        {id:1,
        tood:"Todo Msg",
    complted:false,
},
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext);
}

export const Todoprovider=TodoContext.Provider