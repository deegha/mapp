/**
 * Created by deegha on 01/11/2018
 */

import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { FriendListItem } from './FriendListItem'

import { styles } from './styles'

export class Friends extends React.Component {

  componentDidMount() {
    this.props.fetchNewFriends(this.props.username, 1)
  }

  renderLoading = () => {

    return <View>
      <Text>Loading...</Text>
    </View>
  } 

  render() {

    const { friends, loading, count } = this.props
    return (
      <View style={styles.friendsList} >
        <Text  style={styles.friendsListTitle} >Friends</Text>
        <Text style={styles.friendsCount}>{ count }</Text>
        {loading? this.renderLoading() :<FlatList
          keyExtractor={(item, index) => index.toString()}
          data={friends}
          renderItem={({item})=> <FriendListItem friend={item} /> }
        />}
      </View>
    )
  }
}
