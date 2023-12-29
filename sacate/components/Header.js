import { SafeAreaView, Text } from 'react-native';
import styles from '../style/styles';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text>Bienvenido, Pedro</Text>
    </SafeAreaView>
  );
}

