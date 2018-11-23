/**
 * Created by deegha on 01/11/2018
 */

 import React from 'react'
 import { View,TouchableOpacity, Text, Image } from 'react-native'

 import { styles } from './styles'

export class FriendListItem extends React.PureComponent {
  onPress = (username) => () => { 
  }

  render() {
    const { friend } = this.props
    return (
      <TouchableOpacity onPress={this.onPress(friend.username)} key={friend.id}>
        <View style={styles.fiendListItem}>
          <Image source={{uri: friend.profile_photo}} style={styles.friendPrPic} />
          <Text  style={styles.friendPrName}>
            {friend.username}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

