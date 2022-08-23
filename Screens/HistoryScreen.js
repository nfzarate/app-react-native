import React, { useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, deleteOrder } from '../store/actions/order.action';
import HistoryItem from '../components/HistoryItem'


const HistoryScreen = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.list)

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id));

    const renderListItem = ({ item }) => (
        <HistoryItem item={item} onDelete={onHandlerDeleteItem} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderListItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
                onRefresh={() => dispatch(getOrders())}
                refreshing={false}
            />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
})

export default HistoryScreen
