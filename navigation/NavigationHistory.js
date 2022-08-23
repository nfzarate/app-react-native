import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../Screens/HistoryScreen';
import colors  from '../constants/colors'

const Stack = createNativeStackNavigator();

const NavigationHistory = () => {
    return (
        <Stack.Navigator
            initialRouteName="Historial"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.primary : colors.floralwhite,
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : colors.black,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Historial"
                component={HistoryScreen}
                options={{ title: 'Historial' }}
            />
        </Stack.Navigator>
    )   
}

export default NavigationHistory;