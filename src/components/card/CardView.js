/**
 * Created by deegha on 11/10/2018
 */

import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import img from '../../../assets/d2-mr-battlegrounds-squareclean.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SECONDARY_DETAILS } from '../sharedStyleValues'


import iconCalendar from '../../../assets/iconCalendar.png'
import iconTrophy from '../../../assets/iconTrophy.png'

import { navigate } from './CardContainer'

import { styles } from './styles'

const getDate = (date) => {
  return new Date(tournament.date).toDateString()
} 

export const CardView = ({tournament, navigation}) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={navigate(navigation, tournament.id)} >
      <View style={styles.imgArea}>
        { styles.img !== '' && <Image source={{uri:tournament.image}} style={styles.img} />}
      </View>

      <View style={styles.detailArea}>
        <View style={styles.titleArea}>
          {/* <Image source={{uri:tournament.icon}} style={styles.gameIcon} /> */}
          <Text style={styles.title}>
            {tournament.title}
          </Text>
          {
          !tournament.is_free && <Text>{tournament.mcoin_fees}</Text>
          }
        </View>
        <View style={styles.details}>
          <View style={styles.detailContainer}>
            {/* <Ionicons name={'ios-calendar'} size={15} color={SECONDARY_DETAILS} /> */}
            <Image source={iconCalendar} style={styles.detaiilIcons} />
            <Text style={styles.date}>
            {new Date(tournament.date).toDateString()}
            </Text>
          </View>
          <View style={styles.priceContainer}>  
            {/* <Ionicons name={'ios-trophy'} size={15} color={SECONDARY_DETAILS}  /> */}
            <Image source={iconTrophy} style={styles.detaiilIcons} />
            <Text style={styles.price}>
            {tournament.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}


