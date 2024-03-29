import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const PlaceItem = ({ title, image, address, onSelect}) => {
    return (
        <TouchableOpacity 
            onPress={onSelect}
            style={styles.placeItem}
        >
        <Image style={styles.image} source={{ uri: image}} />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 30
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.darkgray
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: 'red',
        fontSize: 16,
    }
})

export default PlaceItem