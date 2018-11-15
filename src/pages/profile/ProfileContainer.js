/**
 * Created by deegha on 12/10/2018
 */


import React from  'react'
import { connect } from 'react-redux'
import { Platform, View, Text, ImageBackground,  Animated, Image} from 'react-native'
import { LinearGradient } from 'expo'

import { MyGames } from './mygames'
import { Tournaments } from './tournaments'
import { Friends } from './friends'

import { setActiveUser, fetchFriends,fetchUserGames } from '../../actions/activeUserActions'
import { ProfileView } from './ProfileView'
import { styles } from './styles'

import { TabView, Tab } from '../../components'

import iconEarnings from '../../../assets/iconEarnings.png'
import iconMc from '../../../assets/iconMc.png' 

const HEADER_MAX_HEIGHT = 535
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 :330
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

export const TAB_TOURNAMENTS = 'TAB_TOURNAMENTS'
export const TAB_MY_GAMES   = 'TAB_MY_GAMES'
export const FRIENDS        = 'FRIENDS'
class ProfileContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0),
      activeTab: FRIENDS
    }
  }

  componentWillMount() {
    /**
     * Redirect the user back to the login page if the user press back without loging in
    */
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.selectUserType()
      }
    )
  }

  componentDidMount() {
    this.selectUserType()
  }

  componentDidUpdate() {
    console.log("did update")
    if (this.props.activeUser.user.username === "" && !this.props.activeUser.loading) {
      this.selectUserType()
    } 
  }


  selectUserType = () => {
    console.log("this called")
    if(this.props.profileName && this.props.profileName !== "") {
      this.props.setUser(this.props.profileName)
    }else if(this.props.auth.user.name !== "") {
      this.props.setUser(this.props.auth.user.name)
    }else {
      this.props.navigation.navigate('login')
    }
  }

  renderHeader = (user, imageOpacity, imageTranslate ) => (
    <View style={styles.containerHeader}>
      <ImageBackground
        style={[styles.headerImage]}        
        source={{ uri: user.cover_photo.url }}
        >
        <LinearGradient style={styles.headerLinearGradient} colors={['rgba(238, 238, 238, 0)', '#000000']}>
          <Animated.View 
            style={[styles.profileImageContainer, {
                      opacity: imageOpacity,
                      transform: [{ translateY: imageTranslate }],
                    }]}>

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
              <Image source={iconMc} style={styles.eicons} />
              {this.props.activeUser.user.m_coin !== undefined ?<View>
                <Text style={styles.amount}>{this.props.activeUser.user.m_coin.toLocaleString()}</Text><Text style={styles.cur}>M-COINS</Text>
                </View>: <Text style={styles.amount}>Loading...</Text> }
            </LinearGradient>
            
            <LinearGradient style={styles.earningsBox} colors={['#5f4e19', '#31260b']}>
              <Image source={iconEarnings} style={styles.eicons} />
              <View>  
                <Text style={styles.amount}>$1700</Text>
                <Text style={styles.cur}>EARNINGS</Text>
              </View>
            </LinearGradient>
          </View>

          <View style={{zIndex:3}}>
            <TabView>
              <Tab selected={this.state.activeTab === TAB_TOURNAMENTS} 
                    onSelectTab={this.setActiveTab(TAB_TOURNAMENTS)}>Tournaments</Tab>
              <Tab selected={this.state.activeTab === TAB_MY_GAMES} 
                    onSelectTab={this.setActiveTab(TAB_MY_GAMES)}>My Games</Tab>
              <Tab selected={this.state.activeTab === FRIENDS} 
                    onSelectTab={this.setActiveTab(FRIENDS)}>Friends</Tab>
            </TabView>
          </View>
        </View>
      </ImageBackground>
    </View>
  )

  setActiveTab = (tab) =>() => this.setState({activeTab:tab})

  renderSelectedTab = () => {
    switch(this.state.activeTab) {
      case TAB_TOURNAMENTS :
        return <Tournaments />
      case TAB_MY_GAMES:
        return <MyGames   
                mygames={this.props.userGames} 
                fetchUserGames={this.props.fetchUserGames} 
                username={this.props.activeUser.user.username} />
      case FRIENDS: 
        return <Friends
                fetchNewFriends={this.props.fetchNewFriends} 
                username={this.props.activeUser.user.username}
                count={this.props.friends.total_count}
                loading= {this.props.friends.friends.length < 1}
                friends={this.props.friends.friends} />
      default:
        return <Tournaments />
    }
  }

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

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -100],
      extrapolate: 'clamp',
    })

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 5, HEADER_SCROLL_DISTANCE / 3],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })

    

    return (
      user && user.username !== "" ? <View style={styles.outerContainer}>
       
        <Animated.ScrollView 
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          style={{flex:1}}>
          <ProfileView 
            renderSelectedTab={this.renderSelectedTab}
            activeTab={this.state.activeTab} 
            setActiveTab={this.setActiveTab}/>
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
      </View>: <View style={[styles.outerContainer, {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
      }]}>
        <Text style={styles.loadingText}>Loading user profile...</Text>
      </View>
    )
  }
} 

const mapStateToProps = ({ activeUser, auth, friends, userGames }) => ({
  activeUser,
  auth,
  friends,
  userGames
}) 

const mapDispatchToProps = (dispatch) => ({
  setUser: (userName) => dispatch(setActiveUser(userName)),
  fetchNewFriends: (userName, page) => dispatch(fetchFriends(userName, page)),
  fetchUserGames: (userName, page) => dispatch(fetchUserGames(userName, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer) 
