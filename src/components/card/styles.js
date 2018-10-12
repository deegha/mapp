/**
 * Created by deegha on 11/10/2018
 */


import { StyleSheet, Dimensions } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    height:  327,
    width: width,
    borderRadius:22,
    backgroundColor: shared.BACKGROUND_COLOR_2
  },
  imgArea : {
    flex: 2
  },
  detailArea : {
    flex:1,
    
  },
  img: {
    flex: 1,
    width: null,
    height: null
  }
})