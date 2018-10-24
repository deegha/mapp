import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Localization, InputText } from '../../components'

import { styles } from './styles'
import { PRIMERY_COLOR } from '../../components/sharedStyleValues'

export const LoginView = ({
  email,
  password,
  errorEmail,
  errorPasswor,
  validForm
}) => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>
            <Localization id={'login.title'} />
          </Text>
          <Text style={styles.titleText}>
            <Localization id={'login.text'} />
          </Text>
        </View>
        <View style={styles.container}>
          <InputText 
            onChangeText={(e) => console.log(e)}
            type={'email'}
            placeholder={"Email"}
            onChange={(text)=>console.log(text)} 
            error={'required'} />
          <InputText 
            type={'password'}
            error={''} 
            placeholder={"password"} />
        </View>
      </ScrollView>
    </View>
  )
}
