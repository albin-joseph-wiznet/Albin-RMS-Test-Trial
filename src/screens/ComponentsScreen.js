import React from "react";
import { Text, StyleSheet, View } from "react-native";

let name = <Text>Albin</Text>
 function ComponentsScreen () {
    return (
    <View>
    <Text style={styles.text1}> Getting started with React Native! </Text>
    <Text style={styles.text2}> My name is {name} </Text>
    </View>
    )};
  
  
  const styles = StyleSheet.create({
    text1: {
      fontSize: 45
    },
    text2: {
        fontSize: 20
      }
  });
  export default ComponentsScreen;