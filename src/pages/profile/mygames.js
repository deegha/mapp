/**
 * Created by deegha on 01/11/2018
 */

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import GridView from 'react-native-super-grid'

import {styles} from './styles'

export class MyGames extends React.Component {

  componentDidMount() {
    this.props.fetchUserGames(this.props.username, 1)
  }

  render() {
    
    const { userGames, loadingUserGames } = this.props.mygames

    if(userGames.length < 1) {
      return (
        <View style={styles.mygamesContainer}>
          <Text>You have not added any games</Text>
        </View>
      )
    }

    return (
      <View style={styles.mygamesContainer}>
          {userGames.length > 1 && 
          <GridView
          itemContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
           itemDimension={94}
           items={userGames}
           renderItem={item => (
             <View>
                <Image style={styles.myGame} source={{uri: item.image_url}} />
              </View>
             )}
           /> }
      </View>
    )
  }
}

