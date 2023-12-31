import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    title: "Sacate",
    headerStyle: {
      backgroundColor: "black",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  menuHeader: {
    headerStyle: {
      backgroundColor: "black",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  hoy: {
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 3,
  },
  moneda: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 3,
  },
  grupo: {
    backgroundColor: "purple",
    borderRadius: 15,
    padding: 3,
  },
});

export default styles;
