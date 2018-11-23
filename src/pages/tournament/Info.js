/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { View, Text,WebView, Dimensions } from 'react-native'

import HTML from 'react-native-render-html'

import { styles } from './styles'


console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']

export const Info = ({description}) => {

  return (
    <View style={styles.infoContainer}>
      <HTML 
        classesStyles={
          { 'last-paragraph': { textAlign: 'left', color: '#ffffff' } }
        }
        html={`<div  class="last-paragraph">${description} <div>`} 
        imagesMaxWidth={Dimensions.get('window').width} />
    </View>
  )
  
}