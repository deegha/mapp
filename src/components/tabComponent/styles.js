/**
 * Created by deegha on 15/10/2018
 */

import { StyleSheet } from 'react-native'

import  * as shared from '../sharedStyleValues'

export const styles = StyleSheet.create({
  TabContainer: {
  
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor:shared.TAB_BORDER,
    borderBottomWidth:2
  },
  Tab: {
    padding:10,
  }
})