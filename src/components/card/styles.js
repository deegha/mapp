/**
 * Created by deegha on 11/10/2018
 */


import { StyleSheet, Dimensions } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    height:  327,
    width: '100%',
    borderRadius: 22,
    backgroundColor: shared.BACKGROUND_COLOR_2,
    zIndex: 1,
    marginBottom: 20
  },
  imgArea : {
    flex: 3,
    borderRadius:22,
  },
  detailArea : {
    flex:1,
    padding:13
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    borderRadius:22,
  },
  titleArea : {
    flex:2,
    height: 47,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: shared.PRIMERY_COLOR,
   
  },
  details: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%'
  },
  date: {
    color: shared.SECONDARY_DETAILS,
    fontSize: 12,
    marginLeft: 5
  },
  price: {
    color: shared.SECONDARY_DETAILS,
    fontSize: 12,
    marginLeft: 5
  },
  priceContainer: {
    marginLeft: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gameIcon: {
    width:48,
    height: 47
  },
  detaiilIcons: {
    width: 16,
    height: 16
  }
})
