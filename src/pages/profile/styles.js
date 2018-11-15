/**
 * Created by deegha on 12/10/2018
 */


import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({
  outerContainer : {
    flex: 1,
    backgroundColor: shared.SECONDARY_COLOR
  },
  containerHeader: {
    backgroundColor: shared.SECONDARY_COLOR
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: shared.SECONDARY_COLOR
  },
  header: {
    flex: 1,
    height: 300
  },
  headerImage: {
    width: '100%', 
    height: '76%',
    justifyContent:'flex-end',
    // zIndex: 4
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 60,
    width: '100%',
    flexDirection: 'row',
  
  },
  profilePhoto: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: shared.SECONDARY_TEXT_COLOR
  },
    headerLinearGradient: {
    width: '100%',
    padding: 26,
    position: 'relative'
  },
  titleStyle: {
    color: shared.SECONDARY_TEXT_COLOR
  },
  earningsArea: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    zIndex: 3
  },
  earningsBox: {
    backgroundColor: '#5f4e19',
    width: 142,
    height: 92,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    justifyContent: 'space-around'
  },
  earningsContainer: {
    position: 'absolute',
    top: 230,
    left: 0,
    right: 0,
   
  },
  scrollContainer: {
      backgroundColor: shared.SECONDARY_COLOR
  },
  fiendListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 17
  },
  friendPrPic: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 20
  },
  friendPrName: {
    color: '#dddddd',
    fontSize: 16,
    fontWeight: 'bold'
  },
  friendsList: {
    padding: 25
  },
  friendsListTitle: {
    color: shared.SECONDARY_TEXT_COLOR,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 25
  },
  mygamesContainer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  myGame: {
    width:94, 
    height:94,
    borderRadius: 47,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsCount: {
    color: '#828282',
    fontSize: 16
  },
  loadingText: {
    fontSize: 20,
    color: shared.PRIMERY_COLOR
  },
  amount: {
    color: '#ffc019',
    fontSize: 20,
    textAlign: 'center'
  },
  cur: {
    fontSize: 10,
    color: '#a59261',
    textAlign: 'center'
  },
  eicons: {
    width: 27,
    height: 27
  }
})