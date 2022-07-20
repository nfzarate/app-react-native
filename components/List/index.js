import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'
import colors from '../../constants/colors';


export default function List(props) {

    const { itemList, onHandlerModal } = props

    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{color: 'white', fontSize: 18, textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        margin: '4%',
        padding: '2%',
        height: 50,
        backgroundColor: colors.primary
    }
})