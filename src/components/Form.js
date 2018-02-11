/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 04/02/2018
 * Time: 14:58
 **/

import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ""
        }

        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    onSubmitForm(e) {
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task: ""
        })
    }

 render(){
    return (
    <div className="form-div">
        <form className="form-inline justify-content-center" onSubmit={this.onSubmitForm}>
            <div className="form-group mb-2">
                <input type="text" className="form-control" value={this.state.task} onChange={e => {this.setState({task: e.target.value})}}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    </div>
    )
 }
}

export default Form