/**
 * Created by deegha on 15/10/2018
 */


import React from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'

export const TabView = ({children, externalStyles}) => {

  return (
    <View style={[styles.TabContainer,externalStyles]}>
      {children}
    </View>
  )
}