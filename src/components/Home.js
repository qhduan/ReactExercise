/*
 * 首页
 */

"use strict";

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "../css/Home.scss";
import Sidebar from "./Sidebar.js";

export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {
      sidebarData : null
    };
  }

  componentDidMount () {
    var data = {
      "工程研发部门": {
        "Mac 开发工程师": 9,
        "iOS App 测试工程师": 17,
        "Android 远程控制工程师": 61,
        "Web 前端工程师": 31,
        "Android 多媒体软件开发工程师": 2
      },
      "产品设计部门": {
        "网页设计师": 47,
        "ID/工业设计师": 39,
        "视觉设计师/GUI界面设计师": 42,
        "平面设计师": 8
      }
    };

    document.title = "首页";

    this.setState({
      sidebarData: data
    });
  }

  render () {
    const { sidebarData } = this.state;
    if (sidebarData) {
      return (
        <div className="home">
          <Sidebar initialData={ sidebarData } />
        </div>
      );
    }
    return (
      <div className="home"></div>
    );
  }

}
