import { Platform, TouchableOpacity } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors'
import PlaceListScreen from '../Screens/PlaceListScreen'
import PlaceDetailScreen from '../Screens/PlaceDetailScreen'
import NewPlaceScreen from '../Screens/NewPlaceScreen'
import MapScreen from '../Screens/MapsScreen'


const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.primary : colors.floralwhite,
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.black,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}
            options={({ navigation }) => ({
                title: 'Direcciones',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                        <Ionicons
                            name='md-add'
                            color={Platform.OS === 'android' ? colors.black : colors.darkgray}
                            size={26}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title: 'Detalle direccion'}} 
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Nueva direccion'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </PlaceStack.Navigator>
)

export default PlaceNavigator