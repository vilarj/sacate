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
  dropdown: {
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default styles;
