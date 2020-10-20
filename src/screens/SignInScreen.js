import React from 'react';
import { Text,StyleSheet, View, Button, Image, TouchableOpacity , TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-paper';
//import ForgotPass from './ForgotPassScreen';

const SignScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [Change, handleChange] = React.useState('bla1');
  //const [Blur, handleBlur] = React.useState('bla2');
  return (
    <View style={styles.container}>
    <View style={{ backgroundColor: "white", fontSize: 20,paddingLeft:16}}>
     
      
        <Text  style={{ fontSize: 20,  fontWeight: "400",  color: 'black',textAlign: 'left', marginLeft:16, marginTop:2}}>Sign in</Text>
      <TextInput
        style={{ width:328,height: 48, backgroundColor: "white", fontSize: 20,  padding: 10 }}
        //placeholder="Email address "
        label="Email address"
        mode='outlined'
        theme={{ colors: { primary: 'black',underlineColor:'transparent',}}}
        
          value={text}
      onChangeText={text => setText(text)}
      />
<TextInput
          style={{ width:328,height: 48, backgroundColor: "white", fontSize: 20,  padding: 10 }}
        //placeholder="Password"
        label="Password"
        mode='outlined'
        theme={{ colors: { primary: 'black',underlineColor:'transparent',}}}
      value={text2}
      onChangeText={text2 => setText2(text2)}
      />
      <Text
            style={styles.hyperlinkStyle}
            onPress={() => navigation.navigate('ForgotPass')}>Forgot Password?</Text>
    
    

          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
      <View style = {styles.SignInBtn}>
 <Text style = {styles.SignInBtnText}>Sign In</Text>
 
 </View>
</TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop:8, marginLeft:77}}>
      <Text
            style={styles.SignUptext}
           >Haven't registered with us yet ? </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop:8,marginLeft:54}}>
            <Text
            style={styles.text}
            > <Image
            style={styles.Line1}
            source={require('../../assets/Line1.jpg')}
          /> or  <Image
          style={styles.Line2}
          source={require('../../assets/Line1.jpg')}
        /></Text>
           </View>
      
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
       <View style={{ marginTop:60, flexDirection: 'row'}}>
      <Text
            style={styles.Licensetext}
           >By proceeding you agree to Duruper's  </Text>
             <Text
            style={styles.LicenseHyperlink}
            onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
            <Text
            style={styles.Licensetext}
           > and </Text>
             <Text
            style={styles.LicenseHyperlink}
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
    fontSize:12,
    fontWeight:"400"
   
  },
  Licensetext:{
    fontSize:10,
    fontWeight:"400"
  },
  LicenseHyperlink: {
    color: '#0D47A1',
    textDecorationLine: 'underline',
    fontSize:10,
    fontWeight:"400"
    
  },

  SignUpHyperlink: {
    color: '#0D47A1',
    textDecorationLine: 'underline',
    fontSize:12,
    fontWeight:"400"
    
  },
  hyperlinkStyle: {
    color: '#0D47A1',
    textDecorationLine: 'underline',
    fontSize:12,
    fontWeight:"400",
    
    marginLeft:210,
   
    marginRight:1,
    marginTop: 4,
    marginBottom:8
  },
  linkIn:{width:248,
    height:32},
  googleIn:{width:248,
      height:32,
    marginTop:8,
  marginLeft:56,
marginRight:56},
  Line1:{
    width: 112,
height: 2,
alignItems: 'flex-start'},
or:{
width:16,
height:16},
Line2:{
width: 112,
height: 2,
alignItems: 'flex-end'},
SignInBtn:{
width: 328,
height: 32,
marginTop:6,
borderRadius:4,
color:"white",
backgroundColor: '#0D47A1',
alignItems:"center",
alignContent:"center"
}
,
SignInBtnText:{
  color:"white",
  fontWeight:"500",
  fontSize:14,
  marginTop:8
  
},
 // space: 55
});

export default SignScreen;