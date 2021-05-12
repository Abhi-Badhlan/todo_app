

const initialState={
    list:[]
}

const todoReducer=(state=initialState,action)=>{
switch(action.type){
    case 'Add_item':
        const {id ,data}=action.payload;
        
        if(data){
            return{
           
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
    
                ]
            }
        }
        else{
      return{}
    }

        case 'delete_item':
        const newList=state.list.filter((elm)=> { return elm.id !==action.id})
        return{
           
            list: newList
        }


        case 'Remove_all':
       
        return{
           
            list:[]
        }


        default: return state;
}
}
export default todoReducer;