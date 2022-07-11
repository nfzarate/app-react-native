import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'


export default function List(props) {

    const { itemList, onHandlerModal } = props

    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>
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
        marginTop: '10%',
        height: 50,
        backgroundColor: 'white',
    }
})