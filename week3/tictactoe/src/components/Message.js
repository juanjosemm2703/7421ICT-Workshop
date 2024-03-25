import { StyleSheet, View, Text } from 'react-native';
import COLOR from '../constants/color';

export const Message = ({text}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {text} </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: "70%",
      width: '80%',
      padding: 10,
      borderWidth: 2,
      backgroundColor: COLOR.DARKGRAY,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    text: {
        fontSize: 12.5,
        color: COLOR.WHITE,
      },
  });