import { ADD_TASK, TOGGLE_CHECK, REMOVE_TASK, REMOVE_TASK_COMPLETED } from "../../constants/redux";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = action.payload;

            return ({
                ...state,
                tasks: {
                    ...state.tasks,
                    ...newTask
                }
            });

        case TOGGLE_CHECK:
            const toggledTaskId = action.payload;

            if (state.tasks[toggledTaskId]){
                state.tasks[toggledTaskId].isDone = !state.tasks[toggledTaskId].isDone;
            }

            return state;

        case REMOVE_TASK:
            // Do stuff
            return state;

        case REMOVE_TASK_COMPLETED:
            // Do stuff
            return state;

        default:
            return state;
    }
};
