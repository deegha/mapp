import React from 'react'
import { LoginView } from './LoginView'


import { Localization } from '../../components/localization/Localization'
class LoginContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      validForm: false
    }
  }

  onTextChange = (feild, value) => this.setState({[feild]: value}, this.validateForm)  

  validateForm = () => (this.state.email !== "" && this.state.password !== "")? this.setState({validForm:true}): this.setState({validForm:false}) 

  render() {

    console.log(this.state, 'container state')

    return (
      <LoginView 
        onTextChange={this.onTextChange}
        validForm={this.state.validForm}
        email={this.state.email}
        password={this.state.password}
        errorEmail={this.state.errorEmail}
        errorPassword={this.state.errorPassword}
        validForm={this.state.validForm} />
    )
  }
}

export default LoginContainer
