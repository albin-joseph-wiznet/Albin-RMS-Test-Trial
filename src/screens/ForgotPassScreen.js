import React from 'react';
import { Text,StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';


const ForgotScreen = ({ navigation }) => {
  const [textin, setTextin] = React.useState('');
  return (
    <View style={styles.container}>
    <View style={{ backgroundColor: "white", }}>
       <Text  style={{ fontSize: 20,  fontWeight: "400", color: 'black',textAlign: 'left', marginLeft:16 , marginLeft:16}}>Forgot Password </Text>
       <Text  style={{ fontSize: 12,  fontWeight: "400", color: 'black',textAlign: 'left',marginLeft:16, marginTop:8, marginLeft:16}}>Don't worry. Restting your password is easy , just tell us the email address you registered with Duruper .</Text>
       <TextInput
        style={{ width:328,height: 48, backgroundColor: "white", fontSize: 20, marginLeft:16, marginTop:32, marginLeft:16 }}
        //placeholder="Email address "
        label="Email address"
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={textin}
      onChangeText={textin => setText(textin)}
      />
 <TouchableOpacity onPress={() => navigation.navigate('Home')} >
      <View style = {styles.SignInBtn}>
 <Text style = {styles.SignInBtnText}>Send Reset Password Link</Text>
 
 </View>
</TouchableOpacity>
       <View style={styles.container}>
       
    
      
       </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
  textin: {
    fontSize: 30,
    marginVertical: 50
  },
  hyperlinkStyle: {
    color: 'blue',
  },
  SignInBtn:{
    width: 328,
    height: 32,
    marginTop:16,
    marginLeft:16,
    borderRadius:4,
    color:"white",
    backgroundColor:'#AEB5C6',
    alignItems:"center",
    alignContent:"center"
    },
    SignInBtnText:{
      color:"white",
      fontWeight:"500",
      fontSize:14,
      marginTop:8
      
    },
  space: 555
});

export default ForgotScreen;