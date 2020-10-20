import React from 'react';
import { Text, TextInput,StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
//import ForgotPass from './ForgotPassScreen';

const SignUpScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  return (
    <View style={{ backgroundColor: "white", fontSize: 20,paddingLeft:16}}>
       <Text  style={{ fontSize: 20,  fontWeight: '400', fontFamily:'Roboto', color: 'black',textAlign: 'left'}}>Sign Up</Text>
       <View style={styles.container}>
       <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10 }}
        placeholder="First Name"
        value={text}
      onChangeText={text => setText(text)}
      />
      
      <TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10 }}
        placeholder="Second Name"
        onChangeText={() => settext("on input inserted")}
      />
      </View>
      <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10 }}
        placeholder="Country code"
        onChangeText={() => settext("on input inserted")}
      />
      <TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10 }}
        placeholder="Mobile number"
        onChangeText={() => settext("on input inserted")}
      />
       </View>
      <TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10, margin: 10 }}
        placeholder="Email address"
        onChangeText={() => settext("on input inserted")}
      />
<TextInput
        style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10, margin: 10 }}
        placeholder="Password"
        onChangeText={() => settext("on input inserted")}
      />
      
    <Image
        style={styles.linkIn}
        source={require('../../assets/Enabled.jpg')}
        onPress={() => navigation.navigate('MyProfile')}
      />
      <View style={{flexDirection: 'row'}}>
      <Text
            style={styles.SignUptext}
           >Already a member ? </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('ForgotPass')}>Sign in</Text>
            </View>
      {/*
      <TouchableOpacity onPress={()=> alert('image clicked)} >
 
 <Image  source={require('../../assets/Enabled.jpg')} style = {styles.ImageClass} />
 
</TouchableOpacity>
  */}
   
      
      
       
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
        source={require('../../assets/SignIn_Linkedin.jpg')}
      />
             
      <Image
        style={styles.googleIn}
        source={require('../../assets/Sign_in_google.jpg')}
      />
      <Image
        style={styles.googleIn}
        source={require('../../assets/SignIn_fb.jpg')}
      />
       <View style={{flexDirection: 'row'}}>
      <Text
            style={styles.SignUptext}
           >By proceeding you agree to Duruper's  </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
            <Text
            style={styles.SignUptext}
           > and </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('TermsService')}>Terms of Service</Text>
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
height: 2,
alignItems: 'flex-start'},
or:{width:16,
  height:16},
  Line2:{
    width: 112,
height: 2,
alignItems: 'flex-end'},
  space: 555
});

export default SignUpScreen;