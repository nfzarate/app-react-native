import { View, Text, StyleSheet,Button} from "react-native";

const CategoriesScreen = ({navigation}) => {
    return(
        <View style={styles.screen}>
            <Text>Categorias</Text>
            <Button
            title="Ir a productos" onPress={() => {
            navigation.navigate('Products')
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

export default CategoriesScreen