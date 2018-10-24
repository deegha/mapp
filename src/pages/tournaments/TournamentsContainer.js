/**
 * Created by deegha on 03/10/2018
 */


import React from 'react'
import { connect } from 'react-redux'

import { getTournaments } from '../../actions/tournamentsActions'

import { TournamentsView } from './TournamentsView'

class TournamentsContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      showHeaderTitle: false,
      ShoHeaderSubTitil: false,
      showTabs: false,
      activeTab: 'ongoing'
    }
  }

  componentDidMount() {
    this.props.loadTournaments()
  }

  handleScroll = (event) =>  {
    if(event.nativeEvent.contentOffset.y > 34.66666793823241)
      this.setState({showHeaderTitle: true})
    else
      this.setState({showHeaderTitle: false})

    if(event.nativeEvent.contentOffset.y > 40.66666793823241)
      this.setState({ShoHeaderSubTitil: true})
    else
      this.setState({ShoHeaderSubTitil: false})

    if(event.nativeEvent.contentOffset.y > 72)
      this.setState({showTabs: true})
    else
      this.setState({showTabs: false})

      // console.log(event.nativeEvent.contentOffset.y)
  }

  setActiveTab = (tab)=> () => this.setState({activeTab: tab})

  render() {
    return <TournamentsView
              navigation={this.props.navigation}
              showTabs={this.state.showTabs} 
              setActiveTab={this.setActiveTab}
              activeTab={this.state.activeTab}
              tournaments={this.props.tournaments}
              titleH={this.state.showHeaderTitle}
              subTitleH={this.state.ShoHeaderSubTitil}
              handleScroll={this.handleScroll} />
  }
}

const mapStateToProps = ({ tournaments }) => ({
  loading: tournaments.loading,
  tournaments: tournaments.tournaments
})

const mapDispatchToProps = (dispatch) => ({
  loadTournaments: () => dispatch(getTournaments())
})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsContainer)
