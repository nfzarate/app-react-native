import { FlatList, View} from "react-native";
import {CATEGORIES} from '../data/categories'
import GridItem from '../components/GridItem'

const CategoriesScreen = ({navigation}) => {

    const handleSelectedCategory = (item) => {
        navigation.navigate('Products', {
            categoryID: item.id,
            name: item.title
        });
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return (

        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={1}
            keyExtractor={item => item.id}
            ListHeaderComponent={()=><View style={{height:25}}/>}

        />
    ); 
}


export default CategoriesScreen