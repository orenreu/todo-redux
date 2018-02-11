/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 11/07/2017
 * Time: 8:39
 */
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers'


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


var initialState = {}

const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

export default store