import { View } from "react-native";
import Status from "../components/Status";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Status navigation={navigation} />
    </View>
  );
};

export default Home;
