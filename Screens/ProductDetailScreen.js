import { View, Text, StyleSheet,Button} from "react-native";
import { useSelector,useDispatch } from 'react-redux'
import {addItem}  from '../store/actions/list.action'

const PoductDetailScreen = (navigation) => {

    const dispatch = useDispatch()

    const product = useSelector(store => store.products.selected)

    const handlerAddItemList = ()=> dispatch(addItem(product))

    return(
        <View style={styles.screen}>
            <Text>
            {product.name}
            </Text>
            <Text>
            $ {product.price}
            </Text>
            <Button title='Agregar a la lista' onPress={handlerAddItemList}/>
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