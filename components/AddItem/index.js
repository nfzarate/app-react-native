import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Agregar item' 
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <Button title='Add'onPress={onHandlerAddItem} disabled={!textItem.length ? true : false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: 200,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: 'white',
        fontSize: 20
    }
})