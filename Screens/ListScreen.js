import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import {LIST} from '../data/list'
import { ListItem } from '../components/ListItem'

const ListScreen = () => {

  const items = LIST
  const total = 3;

  const handleConfirmList = () => {
    console.log('Confirmar lista');
  } 
  const handlerDeleteList = () => {
    console.log('Eliminar lista');
  }

  const renderItems = ({item}) => {
    return (
      <ListItem item={item} onDelete={handlerDeleteList} />
    )

  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmList}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OSbold',
    padding: 8,
  }
})

export default ListScreen