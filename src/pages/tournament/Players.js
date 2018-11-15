/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import GridView from 'react-native-super-grid'
import { getParticipantsAction} from '../../actions/activeTournamentActions' 

import { styles } from './styles'

Section = ({players, title}) =>{
  return (
    <View style={styles.sectionContainer} >
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionCount}>{players.length}</Text>
      </View>
        <View style={styles.sectionPlyers}>
        { players.length > 0 && <GridView
          itemDimension={70}
          items={players}
          renderItem={item => (
            <TouchableOpacity>
            <Image style={styles.playerImages} source={{uri: item.profile_photo}} />
          </TouchableOpacity>
            )}
          /> }
        </View>
    </View>
  )
}

class Players extends React.Component {

  componentDidMount() {
    this.props.getPlayers(this.props.id)
  }

  render() {

    const { players } = this.props

    return (
      players.length < 1? <View style={styles.freeTextContainer}  ><Text>No players</Text></View>: (
        <View style={styles.freeTextContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>WHO HAVE JOINED</Text>
            <Text style={styles.headerCount}>{players.length}</Text>
          </View>          
          <Section players={players.filter(person => person.is_friend)} title={'FRIENDS'} />
          <Section players={players.filter(person => !person.is_friend)} title={'OTHERS'} />
        </View>
      )
    )
  }
}

const mapStateToProps = ({activeTournament}) => ({
  players: activeTournament.tournament.players
})

const mapDispatchToProps = (dispatch) => ({
  getPlayers: (id) => dispatch(getParticipantsAction(id)) 
})

export default connect (mapStateToProps, mapDispatchToProps)(Players)
