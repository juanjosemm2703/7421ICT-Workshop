
import { StyleSheet,Text, TextInput, Button, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
export default function App() {
  const [imageURL, setImageURL] = useState('');
  const [imageURI, setImageURI] = useState(null);
  
  const handleSubmit = () => {  
    if(imageURL.trim() !== '') {
      setImageURI(imageURL);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Input Image URL:</Text>
      <TextInput
        style={styles.input}
        value={imageURL}
        onChangeText={setImageURL}
        placeholder='Enter the image URL'
        multiline={true}
      />
      <Button title='Submit' onPress={handleSubmit} />
      <Image
        source={{ uri: imageURI }}
        style={styles.image}
      />
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
  input: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
