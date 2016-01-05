/*
 * 首页侧边栏
 */

"use strict";

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "../css/Sidebar.scss";
import Checkbox from "./Checkbox.js";

export default class Sidebar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      checked: {},
      hided: {}
    };
  }

  hide (event, departmentName) {
    event.preventDefault;
    let hided = this.state.hided;
    if (hided[departmentName]) {
      hided[departmentName] = false;
    } else {
      hided[departmentName] = true;
    }
    this.setState({
      hided: hided
    });
  }

  isAllChecked (departmentName) {
    const checked = this.state.checked;
    const department = this.props.initialData[departmentName];
    let allChecked = true;
    for (const positionName in department) {
      if ( !checked[positionName] ) {
        allChecked = false;
        break;
      }
    }
    return allChecked;
  }

  checkDepartment (event, departmentName) {
    let checked = this.state.checked;
    const department = this.props.initialData[departmentName];

    if ( this.isAllChecked(departmentName) ) {
      for (const positionName in department) {
        checked[positionName] = false;
      }
    } else {
      for (const positionName in department) {
        checked[positionName] = true;
      }
    }

    this.setState({
      checked: checked
    });
  }

  checkPosition (event, positionName) {
    let checked = this.state.checked;
    if (checked[positionName]) {
      checked[positionName] = false;
    } else {
      checked[positionName] = true;
    }
    this.setState({
      checked: checked
    });
  }

  empty (event) {
    event.preventDefault();
    this.setState({
      checked: {}
    });
  }

  render () {
    const { checked, hided } = this.state;
    const { initialData } = this.props;
    let tbody = [];
    for (let departmentName in initialData) {
      let department = initialData[departmentName];
      let sum = 0;
      for (let positionName in department) {
        sum += department[positionName];
      }
      tbody.push(
        <tr key={ departmentName }>
          <td className="department">
            <Checkbox onClick={ event => this.checkDepartment(event, departmentName) } checked={ this.isAllChecked(departmentName) } />
            { departmentName }
            <a className="department-hide" onClick={ event => this.hide(event, departmentName) }>⮟</a>
          </td>
          <td><div className="department-sum">{ sum }</div></td>
        </tr>
      );
      if ( !hided[departmentName] ) {
        for (let positionName in department) {
          let positionValue = department[positionName];
          tbody.push(
            <tr key={ departmentName + "/" + positionName }>
              <td className="position">
                <Checkbox onClick={ event => this.checkPosition(event, positionName) } checked={ checked[positionName] } />
                { positionName }
              </td>
              <td>{ positionValue }</td>
            </tr>
          )
        }
      }
    }
    return (
      <div className="sidebar">
        <table>
          <thead>
            <tr>
              <td><h4>招聘职位</h4></td>
              <td><a onClick={ event => this.empty(event) } className="empty">清空</a></td>
            </tr>
          </thead>
          <tbody>
            { tbody }
          </tbody>
        </table>

      </div>
    );
  }

}

Sidebar.propTypes = {
  initialData: PropTypes.object
};

Sidebar.defaultProps = {
  initialData: {}
};
