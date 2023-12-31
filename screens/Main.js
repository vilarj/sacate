import { View } from "react-native";
import Balance from "../components/Balance";
import Status from "../components/Status";

/**
 * This is the main file that renders all needed components for the app to work properly.
 *
 * @param {Navigation} navigation component that helps navigate through screens
 *
 * @returns all components that makes up for the actual app
 */
const Main = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Status navigation={navigation} />
      <Balance />
    </View>
  );
};

export default Main;
