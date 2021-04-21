import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select onChange={(e)=> this.props.update(e.target.value)}className="dropDownContainer" disabled={this.props.allowEdit === 'false' ? true : false }>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
        <option value='gothic'>Gothic </option> 
      </select>
    );
  }
}
