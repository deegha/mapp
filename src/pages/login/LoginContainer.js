import React from 'react'
import { LoginView } from './LoginView'

class LoginContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorEmail: '',
      errorPassword: '',
      validForm: ''
    }
  }

  emailtextChange = (text) => this.onChangetext('email', text)
  passwordTextChange = (text) => this.onChangetext('password', text) 

  validatetext = (feild, text) => {
    if(feild === 'email') {}
  }

  onChangetext = (feild, value) => this.setState({[feild] : value})
  
  render() {
    return (
      <LoginView 
        emailtextChange={this.emailtextChange}
        passwordTextChange={this.passwordTextChange}

        email={this.state.email}
        password={this.state.password}
        errorEmail={this.state.errorEmail}
        errorPasswor={this.state.errorPassword}
        validForm={this.state.validForm} />
    )
  }
}

export default LoginContainer
