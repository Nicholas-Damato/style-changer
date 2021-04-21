import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select onChange={(e)=> this.props.update(+e.target.value)} className="dropDownContainer" disabled={this.props.allowEdit === 'false' ? true : false }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
        <option value='50'> 50 </option>
      </select>
    );
  }
}
