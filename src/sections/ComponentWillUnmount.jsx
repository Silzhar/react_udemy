import React, { Component } from 'react'

class Desmontaje extends Component {
    state = {
        windowWidth: 0
    }

    updateStateWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }
    componentDidMount () {
        this.updateStateWindowWidth()
        window.addEventListener(
            'resize',
            this.updateStateWindowWidth
        )
    }
    render() {
        return(
            <div>
                <p>Componente a desmontar</p>
        <p>Ancho de la ventana : {this.state.windowWidth}</p>
            </div>
        )
    }
}
export default class ComponentWillUnmount extends Component {
    state = { mostrarComponente: true }
    render() {
        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje</h4>
                    <Desmontaje />
                    <button 
                    onClick={() => this.setState({ mostrarComponente: false })}>
                        DESMONTAR
                    </button>
                </div>
            )
        } else {
            return <p>Componente desmontado</p>
        }
        
    }
}
