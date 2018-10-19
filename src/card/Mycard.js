import React from 'react'
class Mycard extends React.Component {
    render() {
        return(<div style = {{border : "10px solid red"}}>
                {this.props.name}
                </div>)
    }
}
export default Mycard;