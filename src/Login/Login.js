import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    }
  }
  handleChange =(name) => (event) => {
    this.setState({[name]: event.target.value});
  }
  clickSubmit = event => {
    event.preventDefault();
    const {name, email, password} = this.state;
    const user = {
      name,
      email,
      password
    }
    fetch("http://localhost:8080/signup",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>console.log(err));
  }
  render() {
    const {name, email, password} = this.state;
    return (
      <section className="login">
        <div className="container">
          <h1 className="mt-5 mb-5">Sign Up</h1>
          <form>
            <div className="form-group">
              <label className="text-muted">Name</label>                
              <input onChange={this.handleChange("name")} type="text" className="form-control" value={name}/>
            </div>
            <div className="form-group">
              <label className="text-muted">Email</label>                
              <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}/>
            </div>
            <div className="form-group">
              <label className="text-muted">Password</label>                
              <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}/>
            </div>
            <button onClick={this.clickSubmit} className="btn btn-primary">Submit</button>              
          </form>            
        </div>
      </section>
    )
  }
}
