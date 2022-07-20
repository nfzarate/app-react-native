import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

export default function CustomModal(props) {
  const {
    modalVisible,
    itemSelected,
    onHandlerDeleteItem,
    onHandlerCompleteItem,
  } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.modalMessage}>
            <Text style={styles.modalTextMessage}>
              ¿Quitar de la lista o marcarlo como comprado?
            </Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              onPress={() => onHandlerDeleteItem(itemSelected.id)}
              style={styles.modalButton}
            >
              <Text style={styles.modalTextButon}>Quitar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onHandlerCompleteItem(itemSelected.id)}
              style={styles.modalButton}
            >
              <Text style={styles.modalTextButon}>Comprado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: colors.darkgray,
    width: "80%",
    height: "50%",
    borderRadius: 10,
    padding: "10%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignText: "center",
  },
  modalButtonContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    backgroundColor: colors.slategray,
    color: colors.floralwhite,
    padding: 8,
    borderRadius: 10,
  },
  modalTextButon: {
    fontFamily: "OSregular",
    fontSize: 18,
  },
  modalItem: {
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: "4%",
    fontFamily: "OSregular",
    color: colors.floralwhite,
  },
  modalTextMessage: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "OSregular",
  },
});
