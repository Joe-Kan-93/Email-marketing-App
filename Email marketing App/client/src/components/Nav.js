import React, { Component } from "react";

class Nav extends Component {
  componentDidMount() {
    document.querySelector(".open-nav").addEventListener("click", function() {
      document.querySelector(".sidenav").classList.toggle("active");
      document.querySelector(".open-nav").classList.toggle("close-open-nav");
    });
  }

  render() {
    return (
      <div className="full-menu">
        <nav>
          <div class="open-nav">
            <div class="lines line-top" />
            <div class="lines line-mid" />
            <div class="lines line-bottom" />
          </div>

          <div id="Navbar" className="sidenav">
            <a href="/software-development">Software development</a>
            <a href="/it-support">IT support</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
