/**
 * Created by deegha on 24/10/2018
 */

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export const BtnRound = ({onSubmit, loading, title, disabled}) => {

    return (
      <TouchableOpacity disabled={loading?true:disabled} onPress={onSubmit} style={disabled?styles.disRoundbBtnContainer:styles.roundbBtnContainer}>
      
        {loading?<Text style={styles.roundbBtnText}>login in..</Text>:<Text style={disabled?styles.disRoundbBtnText:styles.roundbBtnText} >{title}</Text>}
      </TouchableOpacity>
    )
}