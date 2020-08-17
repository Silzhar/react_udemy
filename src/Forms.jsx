import React, { Component } from 'react';

export default class Forms extends Component {
  constructor () {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '',
      inputTerms: true,
    }
  }
    handleClick = ( event) => {
        event.preventDefault()
        const name = this.inputName.value
        const twitter = document.getElementById('twitter').value
        console.log({ name, twitter })
    }

    handleSubmit = ( event) => {
        event.preventDefault()

        // ? Quitamos las siguientes líneas al controlar en el state
        // ? lo que recibe el formulario
        // const name = this.inputName.value
        // const twitter = document.getElementById('twitter').value
        // console.log({ name, twitter })
    }

    handleChange = (ev) => {
        console.log('handleChange')
        console.log(ev.target.checked)
        this.setState({ inputTerms: ev.target.checked })
    }
  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form action="" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              name="userName"
              onChange={ev => this.setState({ inputName: ev.target.value })}
              placeholder="Ponga su nombre"
              ref={inputElement => this.inputName = inputElement}
              value={this.state.inputName}
            />
          </p>

          <p>
            <label htmlFor="">Twitter: </label>
            <input
              type="text"
              id="twitter"
              name="twitterAccount"
              onChange={ev => this.setState({ inputTwitter: ev.target.value })}
              placeholder="Cuenta de Twitter"
              value={this.state.inputTwitter}

            />
          </p>

          <p>
              <label htmlFor="">
                  <input 
                    checked={this.state.inputTerms}
                    onChange={this.handleChange} type="checkbox"/>
                  COCKIES!
              </label>
          </p>

          <button onClick={this.handleClick}>Enviar con handleClick</button>
          <button>Enviar con handleSubmit</button>

        </form>
      </div>
    );
  }
}
