import React, { Component } from 'react'

class ComponenteA extends Component {
    render () {
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component {
    render () {
        return <p>Componente B</p>
    }
}

function useConditionalRender (mostrarA) {
    if (mostrarA) {
        return  <ComponenteA />
    } else {
        return  <ComponenteB />
    }
}

export default class Conditional extends Component {
    constructor() {
        super()
        this.state = { mostrarA: true }
    }
    render() {
        // ? Opción 1
        // const conditionalComponent = this.state.mostrarA ? 
        //     <ComponenteA /> : <ComponenteB />
        return (
            <div>
                <h4>Conditional rendering</h4>
                {useConditionalRender(this.state.mostrarA)}

                {/* // ? Opción 2 */}
                { this.state.mostrarA ? 
                    <ComponenteA /> : <ComponenteB />}
                {/* <ComponenteA />
                <ComponenteB /> */}
            </div>
        )
    }
}
