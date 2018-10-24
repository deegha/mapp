/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import GridView from 'react-native-super-grid'

import { styles } from './styles'

export const Section = ({players, title}) =>{
  return (
    <View style={styles.sectionContainer} >
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionCount}>{players.length}</Text>
      </View>
      <View style={styles.sectionPlyers}>
      <GridView
         itemDimension={70}
         items={players}
         renderItem={item => (
          <TouchableOpacity>
          <Image style={styles.playerImages} source={{uri: item.thembnailUrl}} />
        </TouchableOpacity>
          )}
      /> 
      </View>
    </View>
  )
}

export const Players = ({players}) =>players.length < 1? <View style={styles.freeTextContainer}  ><Text>No players</Text></View>: (
  <View style={styles.freeTextContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>WHO HAVE JOINED</Text>
      <Text style={styles.headerCount}>{players.length}</Text>
    </View>
    
    <Section players={players.filter(person => person.friend)} title={'FRIENDS'} />
    <Section players={players.filter(person => !person.friend)} title={'OTHERS'} />
  </View>
)

