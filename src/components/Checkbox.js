/*
 * 复选框
 */

"use strict";

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "../css/Checkbox.scss";

const CheckedIcon = "✓";

export default class Checkbox extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { checked, onClick } = this.props;
    if ( checked ) {
      return (
        <div onClick={ event => onClick(event) } className="checkbox">{ CheckedIcon }</div>
      );
    }
    return (
      <div onClick={ event => onClick(event) } className="checkbox"></div>
    );
  }

}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  onClick: function () {}
};
