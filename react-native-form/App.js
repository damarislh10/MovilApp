import axios from "axios";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const ejecutarFuncion = async () => {


  try {
    let res = await axios.get(`http://192.168.1.3:3000/`);

console.log(res.data)
   
  } catch (error) {
    console.log(error);
  }
};

export default function App() {
  return <View>
    <View>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Bienvenidos a nuestro futuro exito APP cycling</Text>
      <Button
  onPress={ejecutarFuncion}
  title="Conectar backend"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
