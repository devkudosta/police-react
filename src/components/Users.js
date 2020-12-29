import React from "react";
// import axios from 'axios';
import http from "../http-common";


class Users extends React.Component {
 
  state = {
    users: []
  }
  componentDidMount() {
    http.get(`http://localhost:3000/users`,{})
      .then(res => { 
        const users = res.data;
        this.setState({ users });
      }) 
  }
  render() {
    return (
      <div className="Users">
        <div class="container">
          <div class="row align-items-center my-5">
             
            <div class="col-lg-12">
              <h1 class="font-weight-light">Users</h1>
              <ul>
                { this.state.users.map(user => <li>{user.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;