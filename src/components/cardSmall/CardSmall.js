import React from 'react'
import { View, Image, Text,TouchableOpacity } from 'react-native'

import { styles } from './styles'

import iconCalendar from '../../../assets/iconCalendar.png'
import iconTrophy from '../../../assets/iconTrophy.png'

export class CardSmall extends React.PureComponent {

  render() {
    const { title, game_image, start_date, prize_pot, id } = this.props.tournament

    return (
      <TouchableOpacity onPress={this.props.onPressItem(id)}>
        <View style={styles.cardContainer}>
          <View style={styles.innerContainer}>
            <Image source={{uri: game_image}} style={styles.image} />
            <Text style={styles.TitleText} >{title}</Text>
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.innerContainer}>
              <Image source={iconCalendar} style={styles.icon} />
              <Text style={styles.detailText}>{new Date(start_date).toDateString()}</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image source={ iconTrophy } style={styles.icon} />
              <Text style={styles.detailText}>{prize_pot}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}