import React from "react";
import "./App.css";
import logo from "./static/images/logo.png";

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <img src={logo} alt="logo img" />
      </header>
      <nav>
        <div>
          <a href="#profile">Profile</a>
        </div>
        <div>
          <a href="#messages">Messages</a>
        </div>
      </nav>
      <main>Main content</main>
    </div>
  );
}

export default App;
