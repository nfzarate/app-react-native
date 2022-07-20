import { View, TextInput, Button, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function AddItem(props) {
  const { textItem, onHandlerChangeItem, onHandlerAddItem } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Agregar item"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <View style={styles.button}>
        <Button
          title="Agregar"
          onPress={onHandlerAddItem}
          disabled={!textItem.length ? true : false}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: "5%",
  },
  input: {
    width: 200,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    color: colors.black,
    fontSize: 18,
  },
  button: {
    width: 80,
  },
});
