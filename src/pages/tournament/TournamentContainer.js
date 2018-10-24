/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { connect } from 'react-redux'

import { TournamentView } from './TournamentView'
import { setActiveTournament } from '../../actions/activeTournamentActions' 

import { Info } from './Info'
import { Players } from './Players'
import { Bracket } from './Bracket'

export const TAB_INFO = 'info'
export const TAB_PLAYERS = 'players'
export const TAB_BRACKET = 'bracket'

class TournamentContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: TAB_INFO
    }
  }

  componentDidMount () {
    this.props.setTournament(this.props.navigation.getParam('id'))
  }

  setActiveTab = (tab) =>() => this.setState({activeTab:tab})

  goBack = () => {
    this.props.navigation.goBack()
  }

  renderSelectedTab = () => {
    switch(this.state.activeTab) {
      case TAB_INFO :
        return <Info freetext={this.props.activeTournament.infoText} />
      case TAB_PLAYERS:
        return <Players players={this.props.activeTournament.players} />
      case TAB_BRACKET: 
        return <Bracket />
      default:
        return <Info />
    }
  }

  render() {
    return <TournamentView 
              navigation={this.props.navigation}
              goBack={this.goBack}
              renderSelectedTab={this.renderSelectedTab}
              setActiveTab={this.setActiveTab}
              activeTab={this.state.activeTab} 
              tournament={this.props.activeTournament} />
  }
}

const mapStateToProps = ({activeTournament}) => ({
  activeTournament: activeTournament.tournament,
  loading: activeTournament.loading
})

const mapDispatchToProps = (dispatch) => ({
  setTournament : (id) => dispatch(setActiveTournament(id))
})

export default connect (mapStateToProps, mapDispatchToProps)(TournamentContainer)
