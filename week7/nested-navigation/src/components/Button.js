import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Button({ onPressFunction, children, text }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressFunction}>
            {children}
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#007AFF',
        borderRadius: 5,
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 15,
        color: 'white',
    },
});
