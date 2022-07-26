import { View, Text, StyleSheet,Button} from "react-native";

const CategoryProductsScreen = ({navigation}) => {
    return(
        <View style={styles.screen}>
            <Text >
            Productos
            </Text>
            <Button
            title="Ir a detalles" onPress={() => {
            navigation.navigate('Details')
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryProductsScreen