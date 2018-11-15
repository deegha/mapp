/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { connect } from 'react-redux'

import { TournamentView } from './TournamentView'
import { setActiveTournament, joinTournament } from '../../actions/activeTournamentActions' 

import { Info } from './Info'
import Players  from './Players'
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

  joinTornament = () => {
    const { activeTournament } = this.props

    if(!this.props.auth.authenticated) {
      this.props.navigation.navigate('login')
    } 
    
    let data = {}

    if(!activeTournament.is_team_tournament) {
      data = {
        "tournament": {
          "player": 
        {
          "user_id": 1, 
          "ign": "wolf"
        }
        }
      }
    }else {
      data = {}
    }


  } 

  renderSelectedTab = (players) => { 
    console.log('container', players)
    switch(this.state.activeTab) {
      case TAB_INFO :
        return <Info freetext={this.props.activeTournament.infoText} />
      case TAB_PLAYERS:
        return <Players id={this.props.navigation.getParam('id')} />
      case TAB_BRACKET: 
        return <Bracket />
      default:
        return <Info />
    }
  }

  render() {
    return <TournamentView 
              players={this.props.activeTournament.players}
              navigation={this.props.navigation}
              goBack={this.goBack}
              renderSelectedTab={this.renderSelectedTab}
              setActiveTab={this.setActiveTab}
              activeTab={this.state.activeTab} 
              tournament={this.props.activeTournament} />
  }
}

const mapStateToProps = ({activeTournament, auth}) => ({
  activeTournament: activeTournament.tournament,
  loading: activeTournament.loading,
  auth
})

const mapDispatchToProps = (dispatch) => ({
  setTournament : (id) => dispatch(setActiveTournament(id)),
  join  : (data, id, tournamentType) => dispatch(joinTournament(data, id, tournamentType)) 
})

export default connect (mapStateToProps, mapDispatchToProps)(TournamentContainer)
