import { StyleSheet, View, Text } from 'react-native';
import ImageLoading from '../components/ImageLoading';
import Button from '../components/Button';
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail({ product}) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container} >
            <ImageLoading
                url={product.image}
                width={300}
                height={300}
            />
            <Text style={styles.title}>{product.title}</Text>
            <View>
                <View style={styles.details}>
                    <View>
                        <Text style={styles.price}>Price:</Text>
                        <Text style={styles.price}>${product.price}</Text>
                    </View>
                    <View>
                        <Text style={styles.rate}>Rating:</Text>
                        <Text style={styles.rate}>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.sold}>Sold:</Text>
                        <Text style={styles.sold}> {product.rating.count}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttons}>
                <Button text={'Back'} onPressFunction={()=> navigation.goBack()}>
                    
                </Button>
                <Button text={'Add To Cart'}>
                    
                </Button>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
            }}>
                <Text style={styles.descriptionTitle}>Description</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 10,
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
