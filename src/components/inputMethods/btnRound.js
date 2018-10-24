import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export const BtnRound = ({onSubmit, loading, title}) => {

    return (
      <TouchableOpacity onPress={onSubmit} style={styles.roundbBtnContainer}>
        <Text style={styles.roundbBtnText} >{title}</Text>
      </TouchableOpacity>
    )
}