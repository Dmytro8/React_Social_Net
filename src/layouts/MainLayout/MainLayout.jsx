import React, { Component } from "react";
import "./MainLayout.scss";

import { Header } from "../../components/Header";
import { NavBar } from "../../containers/NavBar";
import { Conversations } from "../../components/Conversations";

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
