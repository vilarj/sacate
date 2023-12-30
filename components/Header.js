import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  const toggleMenu = () => {
    console.log("Pressed")
  }

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={toggleMenu}>
        <MaterialIcons name="menu-open" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
