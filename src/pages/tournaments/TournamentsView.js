/**
 * Created by deegha on 11/10/2018
 */

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CardView } from '../../components/'
import { TabView, Tab } from '../../components'
import * as shared from '../../components/sharedStyleValues'
import { styles } from './styles'


export const TournamentsView = ({handleScroll, titleH, subTitleH, tournaments, navigation,activeTab,showTabs,setActiveTab}) => {

  let headerStyle = {}
  headerStyle = titleH ? {
    backgroundColor: shared.SECONDARY_COLOR
  }:{}

  headerStyle = subTitleH ? {
    ...headerStyle,
    height: 100
  }:{}

  headerStyle = showTabs ? {
    ...headerStyle,
    height: 130
  }:{}

  return (
    <View style={styles.container}>
      <View style={[styles.header, headerStyle]}>
  
        <View>
          {titleH && <Text style={[styles.title, {marginTop:7}]}>Arena</Text>}
          {/* {subTitleH && <Text style={[styles.subTitle, {marginTop:10}]}>MATCHROOM BATTLEGROUNDS</Text>} */}
          {showTabs && <TabView>
            <Tab selected={activeTab=='ongoing'?true:false} onSelectTab={setActiveTab}>
              Ongoing
            </Tab>
            <Tab selected={activeTab=='past'?true:false} onSelectTab={setActiveTab}>
              Past
            </Tab>
        </TabView>}
        </View>
       
      </View>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={handleScroll}
        style={styles.scrollContainer}>
       
        <View style={styles.initTitle}>
          {!titleH ? <Text style={styles.title}>Arena</Text>:<Text style={{marginTop: 57}} />}
          <Text style={[styles.subTitle, subTitleH?{
            color:shared.SECONDARY_COLOR
          }:{}]}>MATCHROOM BATTLEGROUNDS</Text>
          {/* <Text style={styles.subTitle}>MATCHROOM BATTLEGROUNDS</Text> */}
        </View>
        <TabView externalStyles={{marginBottom:20}}>
            <Tab selected={activeTab=='ongoing'?true:false} onSelectTab={setActiveTab('ongoing')}>
              Ongoing
            </Tab>
            <Tab selected={activeTab=='past'?true:false} onSelectTab={setActiveTab('past')}>
              Past
            </Tab>
        </TabView>
        <View>
          {tournaments.map(tournament => {
            if(tournament.ongoing === (activeTab=='ongoing'?true:false))
            return <CardView navigation={navigation} key={tournament.id} tournament={tournament} />
          })}
        </View>
        
      </ScrollView>
    </View>
  )
  
}

