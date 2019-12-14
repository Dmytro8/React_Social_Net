import React, { Component } from "react";
import "./MainLayout.scss";

import { NavBar } from "../../containers/NavBar";
import { Conversations } from "../../components/Conversations";
import { HeaderContainer } from "../../containers/HeaderContainer";

export class MainLayout extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <main className="content">{this.props.children}</main>
        <Conversations />
      </div>
    );
  }
}

export default MainLayout;
