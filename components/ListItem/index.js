import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from '../../constants/colors'

export const ListItem = ({ item, onDelete}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={StyleSheet.header}>{item.name}</Text>
      </View>
      <View style={styles.detail}>
        <View>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio: $ {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='trash' color={colors.primary} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'OSbold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'OSregular'
    }
})