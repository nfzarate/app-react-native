import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationMenu from "./NavigationMenu";
import NavigationList from "./NavigationList";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import NavigationHistory from "./NavigationHistory";
import PlaceNavigator from './PlaceNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="Menú"
        component={NavigationMenu}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="md-home"
                size={24}
                color={focused ? colors.black : colors.darkgray}
              />
              <Text style={{ color: focused ? colors.black : colors.darkgray }}>
                Inicio
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Lista"
        component={NavigationList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="ios-list-sharp"
                size={24}
                color={focused ? colors.black : colors.darkgray}
              />
              <Text style={{ color: focused ? colors.black : colors.darkgray }}>
                Lista
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="HistoryTab"
        component={NavigationHistory}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="cash-outline"
                size={24}
                color={focused ? colors.black : colors.darkgray}
              />
              <Text style={{ color: focused ? colors.black : colors.darkgray }}>
                Historial
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Location"
        component={PlaceNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={24}
                color={focused ? colors.black : colors.darkgray}
              />
              <Text style={{ color: focused ? colors.black : colors.darkgray }}>
                Location
              </Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: colors.slategray,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
