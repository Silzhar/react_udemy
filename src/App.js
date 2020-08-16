import React , { Component } from 'react';
import logo from './logo.svg';

import './Counter';
import './App.css';
// // import Counter from './Counter';
// import CounterNumber from './CounterNumber';
import Conditional from './sections/Conditional';
import ConditionalButtons from './sections/ConditionalButtons';
import cars from './data/cars.json'
import MouseEvent from './MouseEvent'
import Forms from './Forms';

function Hello (props) {
  return <h2>{props.title}</h2>
}

class ComponentHello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const { isActivated, arrayNumbers, multiply, title } = this.props

    const textTwo = isActivated ? 'On' : 'Off'
    const mapperNumbers = arrayNumbers.map(number => number * 2)
    const mapperNumbersTwo = arrayNumbers.map(multiply)


  return (
    <div>
      <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{textTwo}</p>
      <p>{arrayNumbers.join(', ')}</p>
      <p>{mapperNumbers.join(', ')}</p>
      <p>{mapperNumbersTwo.join(', ')}</p>
      <p>{this.props.objectWithInfo.key}</p>
      { title }
    </div>)
  }
}

class CarItem extends Component {
  render() {
    const { car } = this.props

    return (
      <li>
        <p><strong>Nombre: {car.name}</strong></p>
        <p><strong>Marca: {car.company}</strong></p>
      </li>
    )
  }
}

function App() {
  const numbers = [1, 1, 3, 4, 5]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter  contadorInicial={100}/> */}
        {/* <CounterNumber /> */}
        <Forms />
        {/* <Hello title="PROPS !!"/>
        <ComponentHello title="PROPS COMPONENT"/> */}
        <Conditional />
        <ConditionalButtons />
        <MouseEvent />
        {/* <Text number={8}
          arrayNumbers={[2, 4 ,6]}
          objectWithInfo={ {key: 'value1', key2: 'value2'} }
          multiply={(num) => num * 4}
          text="string" 
          isActivated={true}
          title={<h1>PROP TITLE</h1>}
        /> */}

        <h4>Trabajando con listas</h4>
        {numbers.map(number => {
          return <p key={number}>Numero : {number}</p>
        })}

        <ul>
          {cars.map(car => {
            return <CarItem car={car}  key={car.id}/>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
