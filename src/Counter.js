import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {contador: this.props.contadorInicial }
            setInterval(() => {
        this.setState({contador: this.state.contador + 1})
        }, 1000);

    }
    
    render() {
        // const contador = 0
        return (
            <div>
                <p>Componente con STATE</p>
                <span>{this.state.contador}</span>
            </div>
        )
    }
}



export default Counter
