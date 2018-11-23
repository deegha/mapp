import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({

  cardContainer: {
    padding: 10,
    backgroundColor: shared.BACKGROUND_COLOR_2,
    justifyContent: 'space-evenly',
    borderRadius: 30,
    width: '100%',
    marginBottom: 16,
    zIndex: 3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 8,
  },
  TitleText: {
    color: shared.PRIMERY_COLOR,
    fontSize: 18,
    fontWeight: 'bold'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 5
  },
  detailText: {
    color: shared.SECONDARY_DETAILS,
    fontSize: 12
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8
  } 
})