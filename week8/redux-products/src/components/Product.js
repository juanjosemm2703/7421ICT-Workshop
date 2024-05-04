import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function Product({ product }) {
    return (
        <View style={styles.category}>
            <Text style={styles.title}>{product.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    category: {
        padding: 20,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#ededed',
    },
    title: {
        fontSize: 18,
    },
});
