import { SafeAreaView, Text } from 'react-native';
import Header from './components/Header';
import styles from './style/styles';
import Status from './components/Status';
import Menu from './components/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Header />
      <Status />
      <Menu />
    </SafeAreaView>
  );
}

