import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

