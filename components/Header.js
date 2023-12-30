import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../style/styles";

const Header = ({ navigation }) => {
  const toggleMenu = () => {
    navigation.navigate("Menu");
  };

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={toggleMenu}>
        <MaterialIcons name="menu-open" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
