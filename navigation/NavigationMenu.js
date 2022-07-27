import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryProductsScreen from '../Screens/CategoryProductsScreen'
import ProductDetailScreen from '../Screens/ProductDetailScreen'
import colors from '../constants/colors'

const Stack = createNativeStackNavigator();

const  NavigationMenu = () => {
    
    return(

    <NavigationContainer>
        <Stack.Navigator initialRouteName= 'Home' screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.primary : colors.floralwhite,
                
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : colors.black,
                headerTitleStyle: {
                    fontFamily: 'OSbold',
                },
                headerTitleAlign: 'center'            }}>
            <Stack.Screen name='Home' component={CategoriesScreen} options={{title: 'Categorias'}}/>
            <Stack.Screen name='Products' component={CategoryProductsScreen} options={({route})=>({
                title: route.params.name})}/>
            <Stack.Screen name='Details' component={ProductDetailScreen} options={({route})=>({
                title: route.params.name})} />
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default NavigationMenu