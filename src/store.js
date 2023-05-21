const initialState = {
    tasks: ["create a todo-list","learn everything"]
}


export function reducer(state = initialState, action) {
    switch(action.type){
        case 'Add-task': 
            state = {
                tasks: [ ...state.tasks , action.newData]
            }
        return state

        case 'remove-task':
            state = {
                tasks: state.tasks.filter((val,index) => index !== action.index )
            }
        return state

        case 'complete-task':
            state = {
                tasks: state.tasks.map((task, index) => {
                    if (index === action.index) {
                    
                      return {
                        ...task,
                        completed: true
                      };
                    }
                    return task;
            })
        }
            return state

        default: 
        return state
        
    }
}


