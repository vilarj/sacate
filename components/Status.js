import { MaterialIcons } from "@expo/vector-icons";
import { Button, Pressable, View } from "react-native";
import styles from "../style/styles";

export default function Header({ navigation }) {
  return (
    <View style={styles.statusBar}>
      <View>
        <Pressable onPress={() => navigation.navigate("Menu2")}>
          <MaterialIcons name="menu-open" size={50} />
        </Pressable>
      </View>
      <View style={styles.hoy}>
        <Button
          onPress={() => navigation.navigate("History")}
          title="Hoy"
          color="white"
          accessibilityLabel="Hoy"
        />
      </View>
      <View style={styles.moneda}>
        <Button
          onPress={() => navigation.navigate("Moneda")}
          title="Moneda"
          color="white"
          accessibilityLabel="Moneda"
        />
      </View>

      <View style={styles.grupo}>
        <Button
          onPress={() => navigation.navigate("Group")}
          title="Grupo"
          color="white"
          accessibilityLabel="Grupo"
        />
      </View>
    </View>
  );
}
