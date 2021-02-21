import React from 'react';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return (
      <div>
        <div>
        {this.props.pokemon.Pokemon}
        </div>
        <div>
        {this.props.pokemon.Type}
        </div>
        <img src={this.props.pokemon.Image} />
      </div>
    )
  }
}