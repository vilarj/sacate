import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, SafeAreaView } from "react-native";
import styles from "../style/styles";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <MaterialIcons name="menu-open" size={50} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
