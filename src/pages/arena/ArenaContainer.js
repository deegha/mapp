/**
 * Created by deegha on 03/10/2018
 */


import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'

import TournamentsContainer from '../tournaments/TournamentsContainer'
import ProfileContainer from '../profile/ProfileContainer'

import * as shared from '../../components/sharedStyleValues'

export default createBottomTabNavigator({
  Tournaments: {
    screen: TournamentsContainer,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'ios-trophy'} size={25} color={tintColor} />
      },
    })
  },
  Profile: {
    screen: ProfileContainer,
    userName: "shuboothi",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'ios-person'} size={25} color={tintColor} />
      },
    })
  },
},{
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: shared.PRIMARY_ACTIVE,
    inactiveTintColor: shared.PRIMARY_INACTIVE,
    style: {
      backgroundColor: shared.PRIMERY_COLOR,
      padding: 8,
      height: 64
    }
  },
})

