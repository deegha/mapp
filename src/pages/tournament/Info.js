/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const Info = ({freetext}) => (
  <View style={styles.freeTextContainer}>
    <Text style={styles.freeText} >{freetext}</Text>
  </View>
)
