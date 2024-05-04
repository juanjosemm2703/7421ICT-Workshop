import { StyleSheet, View, Text, TouchableOpacity,  } from 'react-native';
import ImageLoading from '../components/ImageLoading';

export default function ProductCard({ onPressFunction, productDetails }) {

    return (
        <View style={styles.product}>
            <TouchableOpacity style={{ gap: 5 }} onPress={onPressFunction}>
                <ImageLoading
                    url={productDetails.image}
                    width='100%'
                    height={200}
                />
                <Text style={styles.price}>${productDetails.price}</Text>
                <Text style={styles.title}>{productDetails.title}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    product: {
        width: '50%',
        padding: 15,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 13,
        color: '#808080',
    },
});
