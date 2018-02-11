/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:35
 **/
import * as types from '../constants/actionTypes'

const defaultState = {
    tasks: [],
    sayHi: false,
    isGreen: false,
    loading: false
}


function tasks(state = defaultState, action) {
    switch (action.type) {
        case types.SAY_HI:
            return {
                ...state,
                sayHi: action.sayHi
            }

        case types.IS_GREEN:
            return {
                ...state,
                isGreen: action.isGreen
            }

        case types.ADD_TASK:
            return {
                ...state,
                tasks: [action.task, ...state.tasks]
            }

        case types.REQUEST_REMOVE_TASK:
            return {
                ...state,
                tasks:[
                    ...state.tasks.slice(0, action.index),
                    ...state.tasks.slice(action.index + 1)
                ]
            }

        case types.UPDATE_TASK:
            return {
                ...state,
                tasks:[
                    ...state.tasks.slice(0, action.index),
                    action.task,
                    ...state.tasks.slice(action.index + 1)
                ]
            }

        case types.REQUEST_GET_TASKS:
            return {
                ...state,
                loading: true
            }

        case types.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            }

        case types.GET_TASKS_ERROR:
            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
}

export default tasks