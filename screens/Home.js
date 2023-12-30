import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <MaterialIcons name="menu-open" size={50} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
