import React from 'react'
import { View, React, Image, Text } from 'react-native'

import { styles } from './styles'

import calander from '../../../assets/iconCalender.png'
import trophy from '../../../assets/iconTrophy.png'

export const CardSmall = ({tournament, date, price}) => {

  const { title, image, date, price } = tournament
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <Text>{title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainer}>
          <Image source={{uri: calander}} style={styles.icon} />
          <Text style={styles.detailText}>{date}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Image source={{uri: trophy}} style={styles.icon} />
          <Text style={styles.detailText}>{price}</Text>
        </View>
      </View>
    </View>
  )
}