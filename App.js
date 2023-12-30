import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import Group from "./screens/Group";
import History from "./screens/History";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Moneda from "./screens/Moneda";
import styles from "./style/styles";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Color of the status bar icons */}
      <StatusBar barStyle="light-content" />

      {/* Routes */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={styles.header} />

        <Stack.Screen
          name="Menu2"
          component={Menu}
          options={styles.menuHeader}
        />

        <Stack.Screen
          name="History"
          component={History}
          options={styles.menuHeader}
        />
        <Stack.Screen
          name="Moneda"
          component={Moneda}
          options={styles.menuHeader}
        />
        <Stack.Screen
          name="Group"
          component={Group}
          options={styles.menuHeader}
        />

        {/* End of routes */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
