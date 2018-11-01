import React from 'react'
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Platform, Animated} from 'react-native'
import { LinearGradient } from 'expo'
import { styles } from './styles'


export const ProfileView = ({user, headerHeight, scrollY}) => {

  platformStyles = Platform.OS === 'ios' ? {} : {marginTop: 22}

  return (
    <View style={[styles.scrollContainer,{height:1000}]}>
      
    </View>
  )
}