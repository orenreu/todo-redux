/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:35
 **/
import {combineReducers} from 'redux'
import tasks from './tasks'


const rootReducer = combineReducers({
    tasks
})


export default rootReducer