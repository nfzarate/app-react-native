import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryProductsScreen from '../Screens/CategoryProductsScreen'
import ProductDetailScreen from '../Screens/ProductDetailScreen'

const Stack = createNativeStackNavigator();

const  NavigationMenu = () => {
    
    return(

    <NavigationContainer>
        <Stack.Navigator initialRouteName= 'Home'>
            <Stack.Screen name='Home' component={CategoriesScreen}/>
            <Stack.Screen name='Products' component={CategoryProductsScreen}/>
            <Stack.Screen name='Details' component={ProductDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default NavigationMenu