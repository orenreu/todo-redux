/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 11/02/2018
 * Time: 7:24
 **/
import React from 'react'
import Form from './Form'
import List from './List'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(task) {
        if(task === "") return
        var tasks = this.state.tasks
        tasks.push(task)
        this.setState({
            tasks
        })
    }

    render(){
        return (
            <div className="app-div">
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="/">ToDo's</a>
                    </nav>
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                            <Form onSubmit={this.onSubmit}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <List items={this.state.tasks}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
