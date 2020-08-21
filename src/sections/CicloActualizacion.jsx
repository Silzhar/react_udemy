import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALS_IMGS = {
  cat: 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/14337.jpg',
  dog:
    'https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/yLHT1FW5LpTt3OgEBwXqYURSwHeSd1SQUxzZNwp8H84/1584574758/public/styles/600x400/public/media/jamie-street--DueXI-0AO0-unsplash.jpg?h=7b96d16a&itok=ukO6F2RK',
  panda:
    'https://static.scientificamerican.com/espanol/cache/file/050D641B-C40F-460A-B892534B0024CB3C_source.jpg?w=390&h=520&4147C8A7-B3A4-4126-9293322177AC2D1C',
};

const ANIMALS = Object.keys(ANIMALS_IMGS);

class AnimalImage extends Component {
  state = {
    src: ANIMALS_IMGS[this.props.animal],
  };
  componentWillReceiveProps(nexProps) {
    if (this.props.animal !== nexProps.animal) {
      // añadir las imagenes del estado al clicar.
      this.setState({ src: ANIMALS_IMGS[nexProps.animal] });
    }
  }

  render() {
    return (
      <div>
        <p>Animal seleccionado: {this.props.animal}</p>
        <img src={this.state.src} alt={this.props.animal} width="250px" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS),
};

// ? Al tener la prop por defecto en el state, esto no es necesario.
// AnimalImage.defaultProps = {
//   animal: 'panda',
// };

export default class CicloActualizacion extends Component {
  state = { animal: 'panda' };

  renderAnimalButton = (animal) => {
    return(
      
      <button 
      key={animal} 
      disabled={animal === this.state.animal}
      onClick={() => this.setState({ animal })}>{animal}
        </button>
    )
  }

  render() {
    return (
      <div>
        <h4>Ciclo de actualización </h4>
        {this.renderAnimalButton('panda')}
        {this.renderAnimalButton('cat')}
        {this.renderAnimalButton('dog')}
        <p></p>
        {ANIMALS.map(this.renderAnimalButton)}
        <p></p>
        <button onClick={() => this.setState({ animal: 'panda' })}>Panda
        </button>
        <button onClick={() => this.setState({ animal: 'cat' })}>Gato</button>
        <button onClick={() => this.setState({ animal: 'dog' })}>Perro</button>

        <AnimalImage animal={this.state.animal} />
      </div>
    );
  }
}
