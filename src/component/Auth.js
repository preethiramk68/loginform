import React from "react"

function login() {
  console.log('Maharajan')
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwod: '',
    };
    this.handleEvent = this.handleEvent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    //Try to call a REST API call with the username and password
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  handleEvent(event) {
    const newemail = event.target.value
    this.setState({
      email: newemail
    });
    console.log(this.state.email)
  }

  render() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={this.handleEvent}
            />
            <label value={this.state.email}></label>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
}
export default LoginForm;
