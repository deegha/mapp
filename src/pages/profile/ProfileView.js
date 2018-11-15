/**
 * Created by deegha on 01/11/2018
 */


import React from 'react'
import { View, Text, FlatList, Platform, Animated} from 'react-native'
import { TabView, Tab } from '../../components'
import { styles } from './styles'

import {TAB_TOURNAMENTS, TAB_MY_GAMES, FRIENDS} from './ProfileContainer'

export const ProfileView = ({user, setActiveTab, activeTab, friends, renderSelectedTab}) => {

  platformStyles = Platform.OS === 'ios' ? {} : {marginTop: 22}

  return (
    <View style={styles.scrollContainer}>
      <View style={{marginTop: 400}} />
      <View>
        {renderSelectedTab()}
      </View>
    </View>
  )
}