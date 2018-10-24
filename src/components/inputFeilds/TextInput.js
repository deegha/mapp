import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { styles } from './styles'

import * as shared from '../sharedStyleValues'

export const InputText = ({
  onChange,
  lable, 
  value, 
  error, 
  placeholder,
  color,
  type
  }) => {
  
  let selectionColor = shared.PRIMERY_COLOR
  let placeholderTextColor = '#737373'
  let underlineColor =   shared.PRIMERY_COLOR
  let extraStyles = {
    color: '#ffffff'
  }

  switch(color) {
    case 'secondary':
      selectionColor = shared.PRIMERY_COLOR
      placeholderTextColor = '#737373'
      underlineColor =   shared.PRIMERY_COLOR
      extraStyles = {
        color: '#ffffff'
      }

    default:
      selectionColor = shared.PRIMERY_COLOR
      placeholderTextColor = '#737373'
      underlineColor =   shared.PRIMERY_COLOR
      extraStyles = {
        color: '#ffffff'
      }
  }

  let extraProps = {}

  if(type === 'email') {
    extraProps = {
      textContentType: 'emailAddress',
      keyboardType: 'email-address'
    }
  }else if (type === 'password') {
    extraProps = {
      secureTextEntry: true,
      textContentType: 'password'
    }
  }
    
  return (
    <View style={styles.textInputContainer}>
      {lable &&<View ><Text style={styles.textInputLable}>{lable}</Text></View>}
      <View style={styles.textInputContainer}>
        <TextInput
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          onChangeText={onChange}
          style={[styles.textInput , extraStyles]} 
          underlineColorAndroid={underlineColor}
          value={value} 
          {...extraProps}
          />
      </View>    
      {error ?<View ><Text style={styles.textInputError}>{error}</Text></View>:<View style={{height: 10}} />}
    </View>
  )
}

