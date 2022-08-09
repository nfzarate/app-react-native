import { useEffect } from "react";
import {FlatList,View} from "react-native";
import ProductItem from '../components/ProductItem';
import { useSelector, useDispatch} from 'react-redux'
import {filteredProduct, selectProduct} from '../store/actions/products.action'



const CategoryProductsScreen = ({navigation,route}) => {

    const dispatch = useDispatch()
    const categoryProducts = useSelector(store => store.products.filteredProducts)
    const category = useSelector(store => store.categories.selected )

    useEffect(() => {
        dispatch(filteredProduct(category.id))
    },[])


    const handleSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Details', {
            name:item.name,
        })
    }

    const renderItemProduct = ({ item }) => (
        <ProductItem item={item} onSelected={handleSelected} />
    )


    return(
   
        <FlatList
        data={categoryProducts}
        renderItem={renderItemProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={()=><View style={{height:25}}/>}
        />
    )
}

export default CategoryProductsScreen