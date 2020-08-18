import React, { Component } from 'react';
import PropTypes from 'prop-types' ;

class Box extends Component {
  render() {
    return (
      <div style={{ border: '2px solid white', margin: 4, padding: 4 }}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  
  // ? con PropTypes lo siguiente no es necesario.
  // constructor (props) {
  //   super(props)
  //   if (typeof props.author === 'undefined')  {
  //     console.warn('author prop is required')
  //     throw new Error('author prop is required')
  //   }
  // }

  render() {
    const { author, children, date, title, textOne, textTwo } = this.props

    return (
      <section style={{ border: '2px solid aqua', margin: 4, padding: 4 }}>
        <h2>{title}</h2>
        {/* En caso de no pasar la prop eliminamos el texto */}
        {author && <p>Artículo escrito por: {author}</p>}
        <Box>{date}</Box>
        <article>{children}</article>
        <p>{textOne}</p>
        <strong>{textTwo}</strong>
      </section>
    );
  }
}

export default class ChildrenProps extends Component {
  render() {
    return (
      <div>
        <h4>ChildrenProps</h4>
        <Box>Texto de Children</Box>
        <Box>props que podemos pasar al componente</Box>
        <Article
            author='Luis Ruiz'
            date={new Date().toLocaleDateString()}
            title='Artículo en children props'
            textOne='Contenido envuelto dentro del componente Article'
            textTwo='Y sus etiquetas añadidas'
        />
      </div>
    );
  }
}
