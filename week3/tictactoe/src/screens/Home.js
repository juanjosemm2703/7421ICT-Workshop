import { StyleSheet, View } from 'react-native';
import { Board } from "../components/Board";
import { TButton } from '../components/TButton';
import COLOR from '../constants/color';
const arr = ["", "0", "X", "X", "0", "0", "X", "0", "X"];  

export const Home = () => {
    

    return (
      <View style={styles.container}>
        <Board tictactoe={arr}/>
        <View style = {styles.buttonContainer}>
            <TButton title="Rules" page='Rules'/>
            <TButton title="Credits"  page='Credits'/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 25,
      borderColor: COLOR.WHITE,
      backgroundColor: COLOR.LIGHTGREY,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: 40,
    }
  });