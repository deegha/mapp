/**
 * Created by deegha on 11/10/2018
 */

import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    padding: 15,
    flex:1,
    backgroundColor: shared.SECONDARY_COLOR,
  },
  header: {
    position:'absolute',
    padding: 15,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: shared.HEADER_MAX_HEIGHT
  },
  title: {
    color: shared.PRIMERY_COLOR,
    fontSize:34,
    fontWeight: 'bold',
    marginTop: 20
  },
  subTitle: {
    color: shared.TEXT_COLOR_2,
    fontWeight: 'bold',
    fontSize:18,
    marginTop: 47
  }
});
