import { SafeAreaView, Text } from 'react-native';
import Header from './components/Header';
import styles from './style/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Header />
    </SafeAreaView>
  );
}

