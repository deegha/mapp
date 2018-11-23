/**
 * Created by deegha on 17/10/2018
 */

import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({
  container: {
    height: 375
  },
  scrollArea:{
    marginBottom: 60,
    flex:1,
    backgroundColor: shared.SECONDARY_COLOR,
  },
  header: {
    flex:1,
    marginBottom: 30,
    marginLeft: 10,
    marginTop: 35,
    flexDirection: 'row'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 11
  },
  headerCount: {
    fontSize: 16,
    color: '#828282'
  },
  headerImage: {
    width: '100%', 
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    color:shared.PRIMERY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5
  },
  gameIcon: {
    width:48,
    height: 47
  },
  headerImageText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 33
  },
  tabsSection: {
    paddingTop: 10,
    backgroundColor: shared.SECONDARY_COLOR,
    justifyContent:'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: shared.TAB_BORDER,
  },
  tournamentdetail: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 29,
    paddingRight: 29
  },
  detailText: {
    color: shared.PRIMERY_COLOR,
    fontSize: 20
  },
  detaiilIcons: {
    width:30,
    height: 30,
    marginBottom: 10,
    marginTop: 5
  },
  detailsWrapper: {
    alignItems:'center',
    marginBottom: 10,
  },
  detailsWrapperDate: {
    alignItems:'flex-start',
    marginBottom: 10,
  },
  freeTextContainer: {
    padding: 20,
    flex: 1
  },
  freeText: {
    color: '#ffffff'
  },
  sectionHeader: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  sectionTitle : {
    color: '#929292',
    fontSize: 14,
    marginRight: 5,
    fontWeight: 'bold'
  },
  sectionCount: {
    color: '#828282',
    fontSize: 14,
  },
  playerImages: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  sectionPlyers: {
    flex: 1,
  },
  sectionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: shared.TAB_BORDER
  },
  joinBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: shared.PRIMERY_COLOR,
    zIndex:3,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center'
  },
  joinBtnText: {
    color: '#494949',
    fontSize: 18
  },
  headerBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 10,
    width: '100%',
    height: 70
  },
  tabBody: {
    flex: 1,
    // backgroundColor: shared.SECONDARY_COLOR,
  },
  dateIcon: {
    width: 20,
    height: 20
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dateText: {
    fontSize: 14,
    color: shared.SECONDARY_TEXT_COLOR,
    marginLeft: 5
  },
  infoContainer: {
    padding: 15
  }
})