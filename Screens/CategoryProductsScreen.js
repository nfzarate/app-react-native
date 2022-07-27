import {FlatList,View} from "react-native";
import {PRODUCTS} from '../data/products'
import ProductItem from '../components/ProductItem';



const CategoryProductsScreen = ({navigation,route}) => {

    const productos = PRODUCTS.filter(product => product.category === route.params.categoryID)

    const handleSelected = (item) => {
        navigation.navigate('Details', {
            productID: item.id,
            name:item.name,
        })
    }

    const renderItemProduct = ({ item }) => (
        <ProductItem item={item} onSelected={handleSelected} />
    )


    return(
   
        <FlatList
        data={productos}
        renderItem={renderItemProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={()=><View style={{height:25}}/>}
        />
    )
}

export default CategoryProductsScreen