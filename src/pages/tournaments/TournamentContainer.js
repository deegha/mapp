/**
 * Created by deegha on 03/10/2018
 */


import React from 'react'

import { TournamentView } from './TournamentView'

export default class TournamentContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      showHeaderTitle: false,
      ShoHeaderSubTitil: false
    }
  }

  handleScroll = (event) =>  {
    if(event.nativeEvent.contentOffset.y > 12.952381134033202)
      this.setState({showHeaderTitle: true})
    else
      this.setState({showHeaderTitle: false})

    if(event.nativeEvent.contentOffset.y > 50.66666793823241)
      this.setState({ShoHeaderSubTitil: true})
    else
      this.setState({ShoHeaderSubTitil: false})
  } 

  render() {

    return <TournamentView 
              titleH={this.state.showHeaderTitle}
              subTitleH={this.state.ShoHeaderSubTitil}
              handleScroll={this.handleScroll} />
  }
}
