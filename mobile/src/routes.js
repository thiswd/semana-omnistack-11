import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
	/* NavigationContainer sempre fica em volta das rotas */
	return (
		<NavigationContainer>
			{	/* headerShown false serve para não mostrar o cabeçalho usando a propriedade name */	}
			<AppStack.Navigator screenOptions={{ headerShown: false }}>
				{ /* Precisa atribuir um name */ }
				<AppStack.Screen name="Incidents" component={Incidents} />
				<AppStack.Screen name="Detail" component={Detail} />
			</AppStack.Navigator>

		</NavigationContainer>
	);
}