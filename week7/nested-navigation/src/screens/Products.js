import { FlatList, StyleSheet, View } from 'react-native';
import { navigate } from '../services/navigation';
import ProductCard from '../components/ProductCard';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {products} from '../mocks/products.json';
import Product from './Product';

const Stack = createStackNavigator();

const  ProductsList = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.products}>
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard
                        productDetails={item}
                        onPressFunction={() => navigate(navigation, 'ProductDetail', { productId: item.id })}
                    />
                )}
            />
           
        </View>
    )
}
export default function Products() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductsList" component={ProductsList} options={{headerShown:false}}/>
            <Stack.Screen name="ProductDetail" component={Product} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    products: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {

        margin: 10,
        width: '100%',
        alignItems: 'center',
    },
});
