import { StyleSheet, View } from "react-native";
import { useState } from "react";
/* import CustomModal from "./components/Modal"; */
/* import AddItem from "./components/AddItem"; */
/* import List from "./components/List"; */
/* import Header from "./components/Header"; */
import WelcomeScreen from "./Screens/welcomeScreen"; 
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import NavigationMenu from "./navigation/NavigationMenu"

export default function App() {
  const [loaded] = useFonts({
    OSbold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OSextrabold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    OSlight: require("./assets/fonts/OpenSans-Light.ttf"),
    OSmedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OSregular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OSsemibold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [welcomeScreen, setwelcomeScreen] = useState(true);

  const onHandlerChangeItem = (t) => setTextItem(t);
  const onHandlerAddItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Date.now(), value: textItem, completed: false },
    ]);
    setTextItem("");
  };

  const onHandlerDeleteItem = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const onHandlerCompleteItem = (id) => {
    let itemCompleted = itemList.findIndex((item) => item.id === id);
    itemList[itemCompleted].completed = true;
    setItemList([...itemList]);
    setModalVisible(!modalVisible);
  };

  const onHandlerWelcome = () => {
    setwelcomeScreen(false);
  };

  if (!loaded) return <AppLoading />;

  return (

    
   <>
      {welcomeScreen ? (
        <WelcomeScreen handlerWelcome={onHandlerWelcome} />
      ) : (
        <NavigationMenu/>  
         /*<View style={styles.screen}>
          <Header title={"Crea tu lista de compras"} />
          <CustomModal
            modalVisible={modalVisible}
            onHandlerDeleteItem={onHandlerDeleteItem}
            itemSelected={itemSelected}
            onHandlerCompleteItem={onHandlerCompleteItem}
          />
          <AddItem
            textItem={textItem}
            onHandlerAddItem={onHandlerAddItem}
            onHandlerChangeItem={onHandlerChangeItem}
          />
          <List itemList={itemList} onHandlerModal={onHandlerModal} />
        </View>*/
      )}
    </>
  );
}

/* const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
}); */
