import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Shop from "../assets/images/shopping.png";
import { Entypo } from "@expo/vector-icons";

export default function Shopping({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container__child}>
        <Text style={styles.header}>Online Shopping</Text>
        <Text style={styles.header__child}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Image source={Shop} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate("Cart")
        }}>
          <Text style={styles.button__text}>Next</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <Entypo name="progress-one" size={32} color="#C100B5" style={styles.dummy}/>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Home")
          }}>
            <Text style={styles.dum}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 10,
    
    
    padding: 10,
  },
  container__child:{
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  header__child: {
    fontSize: 15,
    color: "grey",
  },
  image: {
    width: 280,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#C100B5",
    padding: 15,
    marginHorizontal: 60,
    alignItems: "center",
    borderRadius: 50,
    
  },
  button__text: {
    color: "white",
    fontSize: 20,
    textTransform: "capitalize",
  },
  icons:{
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dummy:{
    marginLeft: 150,
  },
  dum:{
   marginLeft: 100,
  }
});
