import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const ProductItem = ({ item, onSelected }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity onPress={() => onSelected(item)}
            style={styles.productItem}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
    },
    productItem: {
        
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: colors.darkgray,
        justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        fontFamily: 'OSmedium',
        fontSize: 18,
        color:colors.floralwhite
    }
})

export default ProductItem