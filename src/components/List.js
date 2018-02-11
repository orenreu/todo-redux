/**
 * Created by Benzo
 * https://benzo.io
 * User: oreuveni
 * Date: 04/02/2018
 * Time: 15:19
 **/
import React from 'react'

class List extends React.Component {

    constructor() {
        super()

    }


 render(){
    return (
        <ul className="list-group">
            {this.props.tasks.tasks.map((task, index) => {
                return(
                   <ListItem key={index} text={task.title} remove={()=>this.props.removeTask(index, task.id)}/>
                )
            })}
        </ul>
    )
 }
}

const ListItem = (props) => {
    return (
        <li className="list-group-item">{props.text}
        <button onClick={props.remove}>X</button>
        </li>
    )
}

export default List