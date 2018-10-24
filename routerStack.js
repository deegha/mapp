/**
 * Created by deegha on 03/10/2018
 */


import { createStackNavigator } from 'react-navigation'

import ArenaContainer from './src/pages/arena/ArenaContainer'
import TournamentContainer from './src/pages/tournament/TournamentContainer'
import LoginLoginContainer from './src/pages/login/LoginContainer' 

export const RootStack = createStackNavigator(
	{
		arena: {
			screen: ArenaContainer,
			title: 'Arena',
			navigationOptions:{
				header: null 
			}
		},
		tournament: {
			screen: TournamentContainer,
			title: 'Tournament',
			navigationOptions:{
				header: null 
			}
		},
		login: {
			screen: LoginLoginContainer,
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

