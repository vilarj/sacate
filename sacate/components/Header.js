import { SafeAreaView, Text } from 'react-native';
import styles from '../style/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <MaterialIcons name="menu-open" size={50} />
    </SafeAreaView>
  );
}

