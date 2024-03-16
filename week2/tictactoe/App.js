import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const tictactoe = ["X", "0", "X", "X", "0", "0", "X", "0", "0"];  
export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.board}>
      <View style = {styles.box}>
        {tictactoe.map((item, index) => (
         <Text style = {styles.boxText} key={index} onPress={()=>{console.log(`Item:${item} Index:${index}`)}}>
          {item}
         </Text>
        ) )}
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 25,
    borderColor: '#fff',
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board:{
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 300,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor:'#3F704D',
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
    color: '#fff',
    borderWidth: 2,
    textAlign: 'center',
   lineHeight: 80,

  }
});
