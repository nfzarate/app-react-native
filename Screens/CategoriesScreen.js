import { FlatList, View} from "react-native";
import {useSelector, useDispatch} from 'react-redux'
import GridItem from '../components/GridItem'
import {selectCategory } from "../store/actions/category.action";

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()

    

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        });
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return (

        <FlatList
            data={categories}
            renderItem={renderGridItem}
            numColumns={1}
            keyExtractor={item => item.id}
            ListHeaderComponent={()=><View style={{height:25}}/>}

        />
    ); 
}


export default CategoriesScreen