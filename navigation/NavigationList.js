import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListScreen from '../Screens/ListScreen'
import colors from '../constants/colors'
import {Platform} from 'react-native'

const Stack = createNativeStackNavigator();

const NavigationList = () => {

    return(

        <Stack.Navigator
        initialRouteName='list'
        screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? colors.primary : colors.floralwhite,
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.black,
                headerTitleStyle: {
                    fontFamily: 'OSbold',
                },
            headerTitleAlign: 'center'
                
            }}
        >   
            <Stack.Screen
                name='list'
                component={ListScreen}
                options={{title:'Lista'}}
            />
        </Stack.Navigator>

    )
}

export default NavigationList