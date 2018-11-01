/**
 * Created by deegha on 25/10/2018
 */

import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Localization, InputText, BtnRound } from '../../components'

import { styles } from './styles'
import { PRIMERY_COLOR } from '../../components/sharedStyleValues'

export const LoginView = ({
  email,
  password,
  errorEmail,
  errorPassword,
  validForm,
  onTextChange,
  onSubmit,
  loading
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
        <View>
          <InputText 
            name={'Email'}
            type={'email'}
            placeholder={"Email"}
            onChange={onTextChange} 
            value={email}
            error={errorEmail}
             />
          <View style={{height: 20}} />
          <InputText 
            name={'Password'}
            type={'password'}
            onChange={onTextChange} 
            value={password}
            error={errorPassword} 
            placeholder={"Password"} />
          <TouchableOpacity>
            <Text style={styles.forgotpassordText}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={styles.submitBtn}>
            <BtnRound onSubmit={onSubmit} loading={loading} disabled={!validForm} title={"Login"}  />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
