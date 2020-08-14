import React , { Component } from 'react';
import logo from './logo.svg';

import './Counter';
import './App.css';
import Counter from './Counter';
import CounterNumber from './CounterNumber';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <CounterNumber />
        <Hello title="PROPS !!"/>
        <ComponentHello title="PROPS COMPONENT"/>
        <Text number={8}
          arrayNumbers={[2, 4 ,6]}
          objectWithInfo={ {key: 'value1', key2: 'value2'} }
          multiply={(num) => num * 4}
          text="string" 
          isActivated={true}
          title={<h1>PROP TITLE</h1>}
        />
      </header>
    </div>
  );
}

export default App;
