import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLOR from "../constants/color";

export const TButton = ({title, page, back = false}) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate({name: page})
    }
    const onBack = () => {
        navigation.goBack();
    }
    return (
        <Pressable style={styles.button} onPress={ back ? onBack : onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 26,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: COLOR.LIGHTBLUE,
        borderWidth: 2,
      },
      text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: COLOR.WHITE,
      },
});