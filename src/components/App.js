/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:24
 **/
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../actions'
import Main from './Main'


function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main)


export default App