import React, { Component } from "react";
import "./MainLayout.scss";

import { Header } from "../../containers/HeaderContainers/Header";
import { NavBar } from "../../containers/LeftBarContainers/NavBar";
import { Conversations } from "../../containers/RightBarContainers/Conversations";

export class MainLayout extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <main className="content">{this.props.children}</main>
        <Conversations />
      </div>
    );
  }
}

export default MainLayout;
