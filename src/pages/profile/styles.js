import { StyleSheet } from 'react-native'
import * as shared from '../../components/sharedStyleValues'

export const styles = StyleSheet.create({

  scrollContainer: {
    flex: 1,
    // zIndex:1,
    backgroundColor: shared.SECONDARY_COLOR
  },
  header: {
    flex: 1,
    height: 257
  },
  headerImage: {
    width: '100%', 
    height: '90%',
    justifyContent:'flex-end',
    // zIndex: 4
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
    flexDirection: 'row',
  
  },
  profilePhoto: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: shared.SECONDARY_TEXT_COLOR
  },
    headerLinearGradient: {
    width: '100%',
    padding: 25,
    position: 'relative'
  },
  titleStyle: {
    color: shared.SECONDARY_TEXT_COLOR
  },
  earningsArea: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    zIndex: 3
  },
  earningsBox: {
    backgroundColor: '#5f4e19',
    width: 142,
    height: 92,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 5
  },
  earningsContainer: {
    position: 'absolute',
    top: 230,
    left: 0,
    right: 0,
   
  },
  scrollContainer: {
      backgroundColor: shared.SECONDARY_COLOR
  },
})