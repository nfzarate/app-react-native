import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../Screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
    <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
)

export default AuthNavigation;