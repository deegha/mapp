/**
 * Created by deegha on 11/10/2018
 */

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CardView } from '../../components/'

import { styles } from './styles'


export const TournamentView = ({handleScroll, titleH, subTitleH}) => (
  <View style={styles.container}>
    <View style={styles.header}>

      <View>
        {titleH && <Text style={[styles.title, {marginTop:7}]}>Arena</Text>}
        {subTitleH && <Text style={[styles.subTitle, {marginTop:10}]}>MATCHROOM BATTLEGROUNDS</Text>}
      </View>
     
    </View>
    <ScrollView 
      scrollEventThrottle={16}
      onScroll={handleScroll}
      style={styles.scrollContainer}>
      
      <View>
        {!titleH ? <Text style={styles.title}>Arena</Text>:<Text style={{marginTop: 57}} />}
        {!subTitleH? <Text style={styles.subTitle}>MATCHROOM BATTLEGROUNDS</Text>:<Text style={{marginTop: 47}} />}

      </View>
      <CardView />
    </ScrollView>
  </View>
)


