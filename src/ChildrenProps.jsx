import React, { Component } from 'react';

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
  render() {
    return (
      <section style={{ border: '2px solid aqua', margin: 4, padding: 4 }}>
        <h2>{this.props.title}</h2>
        <p>Artículo escrito por: {this.props.author}</p>
        <Box>{this.props.date}</Box>
        <article>{this.props.children}</article>
        <p>{this.props.textOne}</p>
        <strong>{this.props.textTwo}</strong>
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
