import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: shared.SECONDARY_COLOR,
    padding: 22,
  },
  scrollContainer: {
    flex: 1
  },
  titleArea: {
    paddingTop:22,
    paddingBottom: 22,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  title: {
    fontSize: 36,
    color: shared.PRIMERY_COLOR,
    fontWeight: 'bold',
    marginBottom: 22
  },
  titleText: {
    fontSize: 18,
    color: shared.SECONDARY_TEXT_COLOR,
    textAlign: 'center',
    width: 270
  }
})