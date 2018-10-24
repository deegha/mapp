/**
 * Created by deegha on 15/10/2018
 */


import React from 'react'

import { TouchableHighlight, Text } from 'react-native'
import * as shared from '../sharedStyleValues' 

export const Tab = ({children, selected, onSelectTab}) => {

  const styles = selected?{
              borderBottomColor:shared.PRIMERY_COLOR, borderBottomWidth:2,
              
              padding: 20
            }:{padding: 20}

  const selectedFont= selected? {
          color: shared.PRIMERY_COLOR,
          fontSize: 16,
          fontWeight:'bold',  
        }:{
          color: shared.TAB_TEXT,
          fontSize: 16,
          fontWeight: 'bold',
        }

  return (
    <TouchableHighlight 
      underlayColor={shared.SECONDARY_COLOR} style={styles} onPress={onSelectTab}>
      <Text style={selectedFont}>{ children }</Text>
    </TouchableHighlight>
  )
}

