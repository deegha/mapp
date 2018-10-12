/**
 * Created by deegha on 11/10/2018
 */

import React from 'react'
import { View, Text, Image} from 'react-native'
import img from '../../../assets/d2-mr-battlegrounds-squareclean.png'

import { styles } from './styles'

export const CardView = () => {

 

  return (
    <View style={styles.container}>
      <View style={styles.imgArea}>
        <Image source={img} style={styles.img} />
      </View>

      <View style={styles.detailArea}>
      </View>
    </View>
  )
}