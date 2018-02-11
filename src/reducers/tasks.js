/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:35
 **/
import * as types from '../constants/actionTypes'

const defaultState = {
    tasks: []
}


function tasks(state = defaultState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default tasks