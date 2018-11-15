import { Stylesheets } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = Stylesheets.create({

  cardContainer: {
    padding: 10,
    color: shared.BACKGROUND_COLOR_2,
    justifyContent: 'space-evenly'
  },
  image: {
    width: 50,
    hieght: 50,
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
  },
  detailText: {
    color: SECONDARY_DETAILS,
    fontSize: 12
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8
  } 
})