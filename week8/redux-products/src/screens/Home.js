import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { categories } from '../mocks/categories.js';
import Category from '../components/Category.js';
import { loadProductsData, selectProducts } from '../redux/productsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product.js';
import { useEffect, useState } from 'react';

export default function Categories() {
    const { productsData, loading, error } = useSelector(selectProducts);
    const [category, setCategory] = useState("");
    useEffect(() => {
        dispatch(loadProductsData(category));
    }, [category]);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Categories</Text>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <Category
                            category={item}
                            onPressFunction={() => setCategory(item)}
                        />
                    )}
                />
            </View>
            {
                loading ? <ActivityIndicator/> :
                    <View>
                        <Text style={styles.title}>Products</Text>
                        <FlatList
                            style={{ maxHeight: 400 }}
                            data={productsData[category]}
                            renderItem={({ item }) => (
                                <Product product={item}/>
                            )}
                        />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        marginVertical: 10,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },

});
