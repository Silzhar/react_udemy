import React, { Component } from 'react'

export default class CounterNumber extends Component {
    constructor () {
        super()
        this.state = {contador: 1 }
            setInterval(() => {
        this.setState({contador: this.state.contador + 1})
        }, 1000);

    }
    render() {
        console.log('CounterNumber render')
        return (
            <div>
                <span>{this.props.number}</span>
            </div>
        )
    }
}
