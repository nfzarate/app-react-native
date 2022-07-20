import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import image from "../../app_coder/assets/carrito.png";
import colors from "../constants/colors";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Image source={image} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={props.handlerWelcome}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "OSsemibold",
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "OSlight",
  },
});
