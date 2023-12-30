import { Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <Button
      title="Go to the menu"
      onPress={() => navigation.navigate("Menu")}
    />
  );
};

const Menu = ({ navigation }) => {
  return <Text>Menu</Text>;
};
export default Home;
