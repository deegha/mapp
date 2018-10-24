/**
 * Created by deegha on 17/10/2018
 */

import React from 'react'
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo'

import { TabView, Tab } from '../../components'
import { styles } from './styles'

import iconCalendar from '../../../assets/iconCalendar.png'
import iconTrophy from '../../../assets/iconTrophy.png'
import btnBack from '../../../assets/btnBack.png'
import btnShare from '../../../assets/btnShare.png'

import { TAB_INFO, TAB_PLAYERS, TAB_BRACKET } from './TournamentContainer'

export const TournamentView = ({tournament, setActiveTab, activeTab, renderSelectedTab, goBack, navigation}) => {
  return (
    <View>
    <ScrollView style={styles.scrollArea} >
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerImage}        
          source={{ uri: tournament.image }}
          >
          <View style={styles.headerBtns}>
            <TouchableOpacity onPress={goBack}>
              <Image source={btnBack} style={styles.detaiilIcons} /> 
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={btnShare} style={styles.btnShare} />  
            </TouchableOpacity> 
          </View>
          <LinearGradient style={styles.headerImageText} colors={['rgba(238, 238, 238, 0)', '#000000']}>
            <Image source={{uri:tournament.icon}} style={styles.gameIcon} />
            <Text style={styles.title}>
              {tournament.title}  
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.tabsSection}>
        <View style={styles.tournamentdetail}>
          <View style={styles.detailsWrapper}>
            <Image source={iconCalendar} style={styles.detaiilIcons} />     
            <Text style={styles.detailText}>
              {tournament.date}
            </Text>
          </View>
          <View style={styles.detailsWrapper}>
            <Image source={iconTrophy} style={styles.detaiilIcons} />
            <Text style={styles.detailText}>
              {tournament.price}
            </Text>
          </View>
        </View>
        <View>
          <TabView>
            <Tab selected={activeTab === TAB_INFO} 
                  onSelectTab={setActiveTab(TAB_INFO)}>info</Tab>
            <Tab selected={activeTab === TAB_PLAYERS} 
                  onSelectTab={setActiveTab(TAB_PLAYERS)}>Players</Tab>
            <Tab selected={activeTab === TAB_BRACKET} 
                  onSelectTab={setActiveTab(TAB_BRACKET)}>Bracket</Tab>
          </TabView>
        </View>
        <View style={{flex:1}}>
          {renderSelectedTab()}
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('login')}>
      <Text style={styles.joinBtnText}>JOIN TOURNAMENT</Text>
    </TouchableOpacity>
    </View>
  )
}
