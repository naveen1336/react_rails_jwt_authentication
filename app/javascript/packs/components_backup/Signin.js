import React, {Component} from 'react';

class Signin extends Component
{
  handleSubmit = event => {
    event.preventDefault();
    var formData = new FormData()
    formData.append("username",this.inputNode1.value)
    formData.append("password",this.inputNode2.value)

    fetch("http://localhost:3000/api/tokens",
  {method: 'POST', body: formData})
  .then(res => res.json()).then(res => (console.log(res.jwt),
  window.localStorage.setItem('jwt', res.jwt)

  ))

  .then(() => this.props.history.push('/welcome'))
  .catch(function(error){console.log("this is an error",error.message)});

  }

render() {
  return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='username'> username </label> <br />
      <input type='username' id='username' name='username' ref={node => {this.inputNode1 = node} } />
      <br/>
      <label htmlFor='password'> Password </label> <br />
      <input type='password' id='password' name='password' ref={node => {this.inputNode2 = node} } />
      <br />
      <input type='submit' value='Sign In' />


      </form>
      </div>
  )
}

}

export default Signin;
