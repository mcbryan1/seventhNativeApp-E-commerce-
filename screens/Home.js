import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AppPicture from "../assets/images/app.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.header__head}>Welcome To</Text>
        <Text style={styles.header}>Marina Shopping Mall</Text>
        <Image source={AppPicture} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button__text}>Continue</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
  },
  header__head:{
    color: "#C100B5",
    alignSelf: "center",
    fontSize: 50,
    
    fontWeight: "bold",
  },
  header: {
    color: "#C100B5",
    alignSelf: "center",
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  button: {
    backgroundColor: "#C100B5",
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 30,
    alignItems: "center",
    borderRadius: 50,
  },
  button__text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
