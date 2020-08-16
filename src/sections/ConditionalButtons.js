import React, { Component } from 'react'

class LoginButton extends Component {
    render () {
        return <button>Iniciar sesión</button>
    }
}

class LogoutButton extends Component {
    handleClick (event) {
        console.log(event)
        alert('in button !')
    }
    render () {
        return <button onClick={this.handleClick}>Acabar sesión</button>
    }
}

export default class ConditionalButtons extends Component {
    constructor() {
        super()
        this.state = { isUserLogged: true }
    }
    render() {

        return (
            <div>
                <h4>Conditional rendering</h4>
                { this.state.isUserLogged ? 
                    <LogoutButton /> : <LoginButton /> }
            </div>
        )
    }
}
