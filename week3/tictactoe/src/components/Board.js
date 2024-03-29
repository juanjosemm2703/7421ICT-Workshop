import { StyleSheet, Text, View } from 'react-native';
import COLOR from '../constants/color';

export const Board = ({tictactoe}) =>{
    return(
        <View style={styles.board}>
            <View style = {styles.box}>
                {tictactoe.map((item, index) => (
                <Text style = {styles.boxText} key={index} onPress={()=>{console.log(`Item:${item} Index:${index}`)}}>
                {item}
                </Text>
                ) )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    board:{
      borderWidth: 2,
      borderRadius: 10,
      width: 300,
      height: 300,
      backgroundColor: COLOR.YELLOW,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      backgroundColor:COLOR.GREEN,
      width: 260,
      height: 260,
      borderWidth: 2,
      borderRadius: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'stretch',
    },
    boxText: {
      width: '33.33%',
      height: '33.33%',
      fontSize: 40,
      color: COLOR.WHITE,
      borderWidth: 2,
      textAlign: 'center',
     lineHeight: 80,
  
    }
  });
  