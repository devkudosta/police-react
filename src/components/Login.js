import React, { Component } from 'react';
import { render } from 'react-dom'; 
import http from "../http-common";
import { useState } from "react";
import { Form, Button, FormGroup, FormControl, FormLabel }  from "react-bootstrap";


function Login(props) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  function performValidation() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
     
  }

  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Login</h1>
            <div className="Login">
              <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                  <FormLabel>Username</FormLabel>
                  <FormControl autoFocus type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </FormGroup>
                <Button block bsSize="large" disabled={!performValidation()} type="submit">
                  Login
                </Button>
                 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;