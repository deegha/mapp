/**
 * Created by deegha on 11/10/2018
 */

import React from 'react'

export const navigate = (navigation, id) => () => {
  navigation.navigate('tournament', {
    id: id
  })
}

