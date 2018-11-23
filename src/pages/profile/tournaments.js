/**
 * Created by deegha on 01/11/2018
 */

import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { CardSmall } from '../../components'
import { styles } from './styles'

export class Tournaments extends React.Component {

  componentDidMount() {
    this.props.getTouranments(this.props.username)
  }

  onPressItem = (id) => () => {
    this.props.navigation.navigate('tournament', {
      id: id
    })
  }

  renderItem = ({item}) =>{
    return (
      <CardSmall
        tournament={item}
        onPressItem={this.onPressItem}
      />
    )
  }
  
  render () {
    const { tournamentData, username, getTouranments } = this.props
    const { tournaments, loading } = tournamentData
    
    return  (
      tournaments.length < 1? <View /> :<View style={styles.tournamentContainer}>
        <FlatList
          data={tournaments}
          onRefresh={() => getTouranments(username)}  
          keyExtractor={(item, index) => item.id.toString()}
          refreshing={loading}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

