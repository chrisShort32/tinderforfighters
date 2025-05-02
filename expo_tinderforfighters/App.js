import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//487602687272-blld28qfn85evoe950dj57gcadvi6744.apps.googleusercontent.com
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
