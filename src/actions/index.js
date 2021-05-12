export const addTodo=(data)=>{
    return{
        type:'Add_item',
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type:'delete_item',
        id
    }
}

export const removeTodo=()=>{
    return{
        type:'Remove_all'
    }
}