import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const friends = [
    { name:'Friend @1', key:'1'},
    { name:'Friend @2', key:'2'},
    { name:'Friend @3', key:'3'},
    { name:'Friend @4', key:'4'},
    { name:'Friend @5', key:'5'},
    { name:'Friend @6', key:'6'},
    { name:'Friend @7', key:'7'},
    { name:'Friend @8', key:'8'},
    { name:'Friend @9', key:'9'}
];

 function ListScreen1 () 
 {
 return(
<FlatList data = {friends}
 renderItem={({item}) => {return <Text> Hi!!!! {item.name} </Text>}}> 
     </FlatList>
 )

 }

 const style = StyleSheet.create({});

 export default ListScreen1;