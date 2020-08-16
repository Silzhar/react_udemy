import React, { Component } from 'react';

export default class Forms extends Component {
    handleClick = ( event) => {
        event.preventDefault()
        const name = this.inputName.value
        const twitter = document.getElementById('twitter').value
        console.log({ name, twitter })
    }

    handleSubmit = ( event) => {
        event.preventDefault()
        const name = this.inputName.value
        const twitter = document.getElementById('twitter').value
        console.log({ name, twitter })
    }

    handleChange (ev) {
        console.log('handleChange')
        console.log(ev.target.checked)
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
              placeholder="Ponga su nombre"
              ref={inputElement => this.inputName = inputElement}
            />
          </p>

          <p>
            <label htmlFor="">Twitter: </label>
            <input
              type="text"
              id="twitter"
              name="twitterAccount"
              placeholder="Cuenta de Twitter"
            />
          </p>

          <p>
              <label htmlFor="">
                  <input onChange={this.handleChange} type="checkbox"/>
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
