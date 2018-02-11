import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/configureStore'
import App from './components/App'


const AppRouter = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));
