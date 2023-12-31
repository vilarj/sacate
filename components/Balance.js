import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "../style/styles";

/**
 * The component is in charge of rendering everything related to the
 * balance displayed under the status bar. This includes the actual value,
 * the percentage trend icon (winning or losing), among other things.
 *
 * @returns The total balance of user and the other icons rendered
 */
const Balance = () => {
  const monto = 0;
  return (
    <View>
      <View style={styles.balance}>
        {monto >= 0 ? (
          <View>
            <FontAwesome name="dollar" size={24} color="green" />

            <View>
              <Text>{monto}</Text>
            </View>
          </View>
        ) : (
          <View>
            <FontAwesome name="dollar" size={24} color="red" />

            <View>
              <Text>{monto}</Text>
            </View>
          </View>
        )}
      </View>

      <View>
        {monto >= 0 ? (
          <View>
            <MaterialIcons name="trending-up" size={24} color="green" />
          </View>
        ) : (
          <View>
            <MaterialIcons name="trending-down" size={24} color="red" />
          </View>
        )}
      </View>
    </View>
  );
};

export default Balance;
