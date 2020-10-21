import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
//import { StatusBar } from "expo-status-bar";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
    <Image
     style={styles.graphicIcon}
     source={require('../../assets/Graphic.jpg')}
   />
   
   
   <View style={{flexDirection: 'row'}}>
  
       <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
   <View style = {styles.AppliedCard}>
<Text style = {styles.AppliedText}>Sign In </Text>

</View>
</TouchableOpacity>

{/* for sign up button */}
<TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
   <View style = {styles.SignupCard}>
<Text style = {styles.SignupCardText}>Sign Up</Text>

</View>
</TouchableOpacity>

       </View>
       
         <Text
         style={styles.text}
         > <Image
         style={styles.Line1}
         source={require('../../assets/Line1.jpg')}
       /> or  <Image
       style={styles.Line2}
       source={require('../../assets/Line1.jpg')}
     /></Text>
        
        <Image
     style={styles.googleIn}
     source={require('../../assets/Sign_in_google.jpg')}
   />
   
          <Image
     style={styles.googleIn}
     source={require('../../assets/SignIn_Linkedin.jpg')}
   />
          
  
   <Image
     style={styles.googleIn}
     source={require('../../assets/SignIn_fb.jpg')}
   />
    {/* <StatusBar style="auto" /> */}
 </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
       fontSize: 20,
       paddingLeft:16,
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   graphicIcon: {
    //position: 'absolute',
width: 296,
height: 296,
marginLeft: 32,
marginTop: 64}
,
signin_btn:{
height: 32,
width:120,

marginLeft :56,
marginRight:8,
marginTop :20,
marginBottom:6,


},
text: {
  fontSize:15,
  marginVertical: 10
},
SignUptext: {
  fontSize:15,
 
},
SignUpHyperlink: {
  color: '#0D47A1',
  textDecorationLine: 'underline',
  
},
hyperlinkStyle: {
  color: '#0D47A1',
  textDecorationLine: 'underline',
  paddingLeft: 130,
  textAlign: 'right'
},
linkIn:{width:248,
  height:32},
googleIn:{width:248,
    height:32,
  marginTop:8,},
Line1:{
  width: 112,
height: 1.5,
alignItems: 'flex-start'},
or:{width:16,
height:10},
Line2:{
  width: 112,
height: 1.5,
alignItems: 'flex-end'},
AppliedCard:{
width: 120,
height:32,
marginLeft:56,
borderRadius:4,
borderWidth:2,
marginLeft :56,
    marginRight:8,
    marginTop :20,
    marginBottom:6,

borderColor:'gray',
backgroundColor:'white',
alignContent:"center",
alignItems:"center"},
AppliedText:{
fontWeight:'500',
fontSize:14,
marginTop:4,
},
SignupCard:{
width: 120,
height:32,
marginLeft:56,
borderRadius:4,
borderWidth:2,
marginLeft :0,
marginRight:56,
marginTop :20,
marginBottom:6,
color:'white',
borderColor:'#0D47A1',
backgroundColor:'#0D47A1',
alignContent:"center",
alignItems:"center"},
SignupCardText:{
fontWeight:'500',
fontSize:14,
marginTop:4,
color:'white',
},
space: 555
});

export default HomeScreen;