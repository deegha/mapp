/**
 * Created by deegha on 25/10/2018
 */

import React from 'react'
import { connect } from 'react-redux'
import { LoginView } from './LoginView'
import { loginAction } from '../../actions/authActions'
import { Localization } from '../../components/localization/Localization'

class LoginContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'raj@myleet.com',
      password: 'matchroom123',
      validForm: true
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.authenticated)
      this.props.navigation.navigate('arena')
  }

  componentWillMount() {
    if(this.props.authenticated)
      this.props.navigation.navigate('arena')
  }

  onTextChange = (feild, value) => this.setState({[feild]: value}, this.validateForm)  

  validateForm = () => (this.state.email !== "" && this.state.password !== "")? this.setState({validForm:true}): this.setState({validForm:false}) 

  onSubmit = () => {
    const data  = {
      user: {
        "email":this.state.email,
        "password":this.state.password,
        "browser":"",
        "device":"mobile"
      }
    }

    this.props.doLogin(data)
  }

  render() {

    return (
      <LoginView 
        loading={this.props.authLoading}
        onSubmit={this.onSubmit}
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

const mapStateToProps = ({auth}) => ({
  authenticated: auth.authenticated,
  authLoading: auth.loading
})

const mapDispatchToProps = (dispatch) => ({
  doLogin: (user) => dispatch(loginAction(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
