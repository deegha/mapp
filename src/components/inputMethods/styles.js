import { StyleSheet } from 'react-native'
import * as shared from '../sharedStyleValues'

export const styles = StyleSheet.create({
  textInputContainer: {
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textInputLable: {
    color: '#737373',
    fontSize: 17,
  },
  textInputError: {
    color: 'red',
    fontSize: 16,
    marginBottom: 15
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    padding: 2,
    paddingBottom: 10,
    paddingTop: 0,
    fontSize: 20
  },
  roundbBtnContainer: {
    marginTop: 30,
    padding: 15,
    borderRadius: 40,
    backgroundColor: shared.PRIMERY_COLOR,
    alignItems:'center'
  },
  roundbBtnText: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  }
})