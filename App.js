import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Shopping from "./screens/Shopping";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#C100B5",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <View>
                <Ionicons
                  name="md-cart"
                  size={44}
                  color="white"
                  style={styles.icon}
                />
              </View>
            );
          },
        }}
      >
        <Stack.Screen name="Shopping" component={Shopping} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    elevation: 20,
  },
});
