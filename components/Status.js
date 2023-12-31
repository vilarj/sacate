import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Pressable, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../style/styles";

export default function Header({ navigation }) {
  const monedaData = [
    { label: "Pesos", value: "1" },
    { label: "Dollars", value: "2" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.statusBar}>
      <View>
        <Pressable onPress={() => navigation.navigate("Menu")}>
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
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={monedaData}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <MaterialIcons name="attach-money" size={20} color="white" />
          )}
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
