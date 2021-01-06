import { ADD_TASK, TOGGLE_CHECK, REMOVE_TASK, REMOVE_TASK_COMPLETED } from "../../constants/redux";
import { Task } from '../../types/';

export const todoActions = {
    addTask: (newTask: Task) => async (dispatch) => {
        dispatch({ type: ADD_TASK, payload: newTask })
    },
    toggleCheck: (taskId: number) => async (dispatch) => {
        dispatch({ type: TOGGLE_CHECK, payload: taskId })
    },
    // Do later these features
    removeTask: (taskId: number) => ({ type: REMOVE_TASK, payload: taskId }),
    removeTaskCompleted: () => ({ type: REMOVE_TASK_COMPLETED })
};
