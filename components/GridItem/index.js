import { Text, View,TouchableOpacity,StyleSheet} from "react-native";
import colors from "../../constants/colors";

const GridItem = ({item, onSelected}) => {
  return (

    <View style={styles.gridItem}>
        <TouchableOpacity 
            onPress={()=>onSelected(item)}
            style={styles.container}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        marginVertical:1,
        height:50,
        marginHorizontal:10,
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        padding:8,
        backgroundColor:colors.darkgray,
        borderRadius:3
        
    },
    title: {
        fontFamily:'OSsemibold',
        fontSize: 20,
        color:colors.floralwhite
    }
})

export default GridItem

