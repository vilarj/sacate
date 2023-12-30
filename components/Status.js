import { View, SafeAreaView, Text } from 'react-native';
import styles from '../style/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
        <View>
            <Text>Hoy</Text>
        </View>
      
        <View>
            <Text>Moneda</Text>
        </View>

        <View>
            <Text>Grupo</Text>
        </View>
    </SafeAreaView>
  );
}

