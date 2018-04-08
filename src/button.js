import React, { Component } from 'react';
import "./button.css"


class Button extends Component {
 render() {
   return (
// Button zum öffnen des Formulares
      <p>
        <a className="button border" onClick={this.props.showForm} data-toggle="collapse" role="button" aria-expanded="false">
          + Praxiserfahrung hinzufügen
        </a>
      </p>
    );
  }
}


export default Button;
