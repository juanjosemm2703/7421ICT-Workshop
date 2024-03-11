import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <View style={styles.divider} />
      <Text>From Group 7</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '50%',
    marginVertical: 10,
  },
});
