import { StyleSheet, View, ScrollView } from 'react-native';
import ProductDetail from '../components/ProductDetails';
import { products } from '../mocks/products.json';
import Order from './Order';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

function ProductDescription({ route }) {
    const product = products.find(product => product.id === route.params.productId);
    return (
        <View style={styles.container} >
            <ScrollView
                style={styles.product}
            >
                <ProductDetail product={product} />
            </ScrollView>
        </View>
    )
}

export default function Product({ route }) {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="ProductDescription"
                component={ProductDescription}
                initialParams={{ productId: route.params.productId }}
                options={{ headerShown: false, tabBarLabel: "Product Detail" }} />
            <Tabs.Screen
                name="Order"
                component={Order}/>

        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttons: {
        flexDirection: 'row',
        gap: 40,
    },
    product: {
        flex: 1,
        paddingHorizontal: 25,
        marginVertical: 15,

    },
    image: {
        borderRadius: 40,
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rate: {
        fontSize: 20,
    },
    sold: {
        fontSize: 20,
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        color: '#808080',
    },
});
