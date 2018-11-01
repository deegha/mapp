import React from 'react'

import { Platform, View, Text, Image,  Animated} from 'react-native'

export default class ParallaxHeader extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0),
      refreshing: false,
    }
  }

  render() {

    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? this.props.headerMaxHeight : 0,
    )

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, this.props.headerSrollDistance],
      outputRange: [0, -this.props.headerSrollDistance],
      extrapolate: 'clamp',
    })

    return (
      <View style={{flex:1}}>
       
        <Animated.ScrollView 
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          // contentInset={{
          //   top: 300,
          // }}
          // contentOffset={{
          //   y: 300,
          // }}
          style={{flex:1}}>

          {this.props.scrollViewContent}
        </Animated.ScrollView>


         <Animated.View  style={{
            position: 'absolute',
            
            top: 0,
            left: 0,
            right:0,
            height:this.props.headerMaxHeight,
            transform: [{
              translateY: headerTranslate
            }]
          }}> 

          {this.props.header}
         
        </Animated.View>
      </View>
    )
  }
}

