import React from "react";
import "./App.scss";
import logo from "./static/images/logo.png";
import contentImage from "./static/images/content-image.jpg";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="logo img" />
      </header>
      <nav className="nav">
        <div>
          <a href="#profile">Profile</a>
        </div>
        <div>
          <a href="#messages">Messages</a>
        </div>
        <div>
          <a href="#messages">News</a>
        </div>
        <div>
          <a href="#messages">Music</a>
        </div>
        <div>
          <a href="#messages">Settings</a>
        </div>
      </nav>
      <main className="content">
        <img src={contentImage} alt="content" />
      </main>
      <aside className="conversations">
        <ul>
          <li>Friend number 1</li>
          <li>Friend number 2</li>
          <li>Friend number 3</li>
          <li>Friend number 4</li>
          <li>Friend number 5</li>
          <li>Friend number 6</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
