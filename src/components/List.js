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
        this.state = {
            listItems: []
        }
    }
    
    componentWillMount() {

    }
    
    componentDidMount() {

    }
    
    componentWillReceiveProps(nextProps) {

    }
    
    componentWillUnmount() {
        
    }

 render(){
    return (
        <ul className="list-group">
            {this.state.listItems.map((item, index) => {
                return(
                   <ListItem key={index} text={item} />
                )
            })}
        </ul>
    )
 }
}

const ListItem = (props) => {
    return (
        <li className="list-group-item">{props.text}</li>
    )
}

export default List