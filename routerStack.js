/**
 * Created by deegha on 03/10/2018
 */


import { createStackNavigator } from 'react-navigation'

import ArenaContainer from './src/pages/arena/ArenaContainer'

export const RootStack = createStackNavigator(
	{
		arena: {
			screen: ArenaContainer,
			title: 'Arena',
			navigationOptions:{
				header: null 
			}
		}
	},
	{
		initialRouteName: 'arena',
		navigationOptions: {
		headerStyle: {
			backgroundColor: '#00bcd4',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: '100',
		},
    },
	}
)	

