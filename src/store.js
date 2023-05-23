

const initialState = {
    tasks: [],
    completedtasks: [] // Initialize completedtasks array
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case 'Add-task':
        return {
          ...state,
          tasks: [...state.tasks, action.newTask]
        };
  
      case 'remove-task':
        return {
          ...state,
          tasks: state.tasks.filter((_, index) => index !== action.index)
        };
  
      case 'complete-task':
        return {
          
          completedtasks: [...state.completedtasks, state.tasks[action.index]],
          tasks: state.tasks.filter((_, index) => index !== action.index)
        };
  
      default:
        return state;
    }
  }
  

