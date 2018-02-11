/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:33
 **/
import * as types from '../constants/actionTypes'
import axios from 'axios'


//=========================================================================
//SAY HI===================================================================
//=========================================================================
export function sayHi(sayHi){

    return {
        type: types.SAY_HI,
        sayHi
    }
}

//=========================================================================
//IS GREEN=================================================================
//=========================================================================
export function goGreen(isGreen){

    return {
        type: types.IS_GREEN,
        isGreen
    }
}


//=========================================================================
//ADD TASK=================================================================
//=========================================================================
export function addTask(task) {
    return {
        type: types.ADD_TASK,
        task: task
    }
}


//=========================================================================
//GET TASKS================================================================
//=========================================================================
export function getTasks() {
    return (dispatch) => {
        dispatch(requestGetTasks())
        axios.get('http://localhost:4000/tasks?_sort=id&_order=desc')
            .then((response)=>{
            dispatch(getTasksSuccess(response.data))
            }).catch((error) => {
            console.log(error)
            dispatch(getTasksError())
        })
    }
}


function requestGetTasks(){
    return {
        type: types.REQUEST_GET_TASKS
    }
}

function getTasksSuccess(tasks){
    return {
        type: types.GET_TASKS_SUCCESS,
        tasks
    }
}

function getTasksError(){
    return {
        type: types.GET_TASKS_ERROR
    }
}


//=========================================================================
//REMOVE TASKS=============================================================
//=========================================================================

export function removeTask(index, id) {
    return (dispatch) => {
        dispatch(requestRemoveTask(index))
        axios.delete(`http://localhost:4000/tasks/${id}`)
            .then((response) => {
            dispatch(removeTaskSuccess())
            }).catch((error) => {
            console.log(error)
            dispatch(removeTaskError())
        })
    }
}

function requestRemoveTask(index) {
    return {
        type: types.REQUEST_REMOVE_TASK,
        index
    }
}

function removeTaskSuccess() {
    return {
        type: types.REMOVE_TASK_SUCCESS
    }
}

function removeTaskError() {
    return {
        type: types.REMOVE_TASK_ERROR
    }
}