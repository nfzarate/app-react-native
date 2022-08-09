import { View, Text, StyleSheet} from "react-native";
import { useSelector } from 'react-redux'

const PoductDetailScreen = () => {

    const product = useSelector(store => store.products.selected)

    return(
        <View style={styles.screen}>
            <Text>
            {product.name}
            </Text>
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

export default PoductDetailScreen