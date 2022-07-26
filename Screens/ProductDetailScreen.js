import { View, Text, StyleSheet} from "react-native";

const PoductDetailScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>
            Detalles/Cantidades
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