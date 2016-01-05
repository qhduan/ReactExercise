/*
 * 复选框
 */

"use strict";

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

const checked = "✓";

export default class Checkbox extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="checkbox"></div>
    );
  }

}
