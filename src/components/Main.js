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
    }

    componentWillMount() {
        this.props.getTasks()
    }


    render(){
        return (
            <div className="app-div">
                <div className="container">
                    <nav className={this.props.tasks.isGreen ? "navbar navbar-light bg-light green" : "navbar navbar-light bg-light"}>
                        <a className="navbar-brand" href="/">ToDo's</a>
                        {this.props.tasks.sayHi ? <p>Hi JFroggers</p>: null}
                    </nav>
                    <div className="row">
                        <button onClick={() => this.props.sayHi(true)}>Say Hi</button>
                    </div>
                    <div className="row">
                        <button onClick={() => this.props.goGreen(true)}>Go Green</button>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                            <Form {...this.props}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <List {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
