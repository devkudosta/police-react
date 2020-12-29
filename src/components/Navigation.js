import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            IDDPRO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : "" }`} >
                <a class="nav-link" href="/">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/login" ? "active" : "" }`} >
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/users" ? "active" : "" }`} >
                <a class="nav-link" href="/users">
                  Users
                </a>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);