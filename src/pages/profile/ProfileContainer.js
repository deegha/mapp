/**
 * Created by deegha on 12/10/2018
 */


import React from  'react'
import { connect } from 'react-redux'
import { Platform, View, Text, ImageBackground, Image,  Animated} from 'react-native'
import { LinearGradient } from 'expo'

import { setActiveUser } from '../../actions/activeUserActions'
import { ProfileView } from './ProfileView'
import { styles } from './styles'


const HEADER_MAX_HEIGHT = 350
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 150
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT
class ProfileContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0),
      refreshing: false,
    }
  }

  componentDidMount() {
    this.props.setUser("shuboothi")
  }


  renderScrollViewContent(user) {
    
    return (
      <View style={styles.scrollContainer}>
        
        <View style={{height:1000}} />
      </View>
    )
  }

  renderHeader = (user, imageOpacity, imageTranslate ) => (
    <View>
      <ImageBackground
        style={[styles.headerImage]}        
        source={{ uri: user.cover_photo.url }}
        
        >
        <LinearGradient style={styles.headerLinearGradient} colors={['rgba(238, 238, 238, 0)', '#000000']}>
          <Animated.View style={[styles.profileImageContainer, {
                      opacity: imageOpacity,
                      transform: [{ translateY: imageTranslate }],
                    }]}>
                {/* <Animated.Image 
                
                source={{ uri: user.profile_photo.url }} 
                style={[styles.profilePhoto,,{
                  transform: [{
                    translateY: imageTranslate
                  }]
                }]} /> */}

                <Animated.Image
                  style={[
                    styles.profilePhoto
                  ]}
                  source={{ uri: user.profile_photo.url }} 
                />
                <Text style={styles.profileName}>
                  {user.display_name?user.display_name:user.username}
                </Text>
              </Animated.View>
        </LinearGradient>
      <View style={styles.earningsContainer}>
        <View style={styles.earningsArea}>
            <LinearGradient style={styles.earningsBox} colors={['#5f4e19', '#31260b']}>
              <Text>1700 mcoins</Text>
            </LinearGradient>
            <LinearGradient style={styles.earningsBox} colors={['#5f4e19', '#31260b']}>
              <Text>$1700</Text>
            </LinearGradient>
          </View>
      </View>
      </ImageBackground>
    </View>
  )



  render() {

    const { user } = this.props.activeUser

    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    )

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    })

    const ImageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE+10],
      extrapolate: 'clamp',
    })

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -100],
      extrapolate: 'clamp',
    })

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 3, HEADER_SCROLL_DISTANCE / 2],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })

    return (
      user && user.username !== "" && <View style={{flex:1}}>
       
        <Animated.ScrollView 
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
 
          style={{flex:1}}>

          {/* {this.renderScrollViewContent(user)} */}
          <ProfileView />
        </Animated.ScrollView>


        <Animated.View  style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right:0,
            height:HEADER_MAX_HEIGHT,
            transform: [{
              translateY: headerTranslate
            }]
          }}> 

          {this.renderHeader(user, imageOpacity, imageTranslate)}
         
        </Animated.View>
      </View>
    )

  }
} 

const mapStateToProps = ({ activeUser, auth }) => ({
  activeUser,
  auth
}) 

const mapDispatchToProps = (dipatch) => ({
  setUser: (userName) => dipatch(setActiveUser(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer) 
