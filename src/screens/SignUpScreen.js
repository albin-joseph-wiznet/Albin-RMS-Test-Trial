import React from 'react';
import { Text, StyleSheet, View, Button,Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
//import ForgotPass from './ForgotPassScreen';

const SignUpScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
    <View style={{ backgroundColor: "white", }}>
       <Text  style={{ fontSize: 20,  fontWeight: "400", fontFamily:'Roboto', color:'black',textAlign:'left', marginLeft:16, marginTop:2}}>Sign Up</Text>
       <View style={styles.container}>
       <View style={{flexDirection:'row', marginBottom:2}}>
      <TextInput
        style={{width:160, height: 48, backgroundColor: "white", fontSize: 16, marginRight:8, marginLeft:16 }}
        label="First name"
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={{ width:160, height: 48, backgroundColor: "white", fontSize: 16 }}
        label="Second name "
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
      </View>
      <View style={{flexDirection: 'row', marginBottom:16}}>
      <TextInput
        style={{ width:78, height: 48, backgroundColor: "white", fontSize: 16, marginTop:16, marginLeft:16 }}
        label="Country code "
        mode='outlined'
        placeholder='+91'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={{  width:242, height: 48, backgroundColor: "white", fontSize: 16,marginLeft:8 , marginTop:16}}
        label="Mobile number "
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
       </View>
      <TextInput
        style={{ width:328, height: 48, backgroundColor: "white", marginLeft:16,fontSize: 16 ,}}
        label="Email address"
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
<TextInput
        style={{width:328, height: 48, backgroundColor: "white",marginLeft:16, fontSize:16, marginTop: 16, }}
        label="Password"
        mode='outlined'
        theme={{ colors: { primary: '#0D47A1',underlineColor:'transparent',}}}
        value={text}
        onChangeText={text => setText(text)}
      />
        
<Text style={styles.PasswordPromttext}>Password must be atleast 8 characters.</Text>

<TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} >
      <View style = {styles.SignupCard}>
 <Text style = {styles.SignupCardText}>Sign Up</Text>
 
 </View>
</TouchableOpacity>
      

      <View style={{flexDirection: 'row'}}>
      <Text
            style={styles.SignUptext}
           >Already a member ? </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('SignIn')}>Sign in</Text>
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
       <View style={{flexDirection: 'row', marginTop:14}}>
      <Text
            style={styles.TCtext}
           >By proceeding you agree to Duruper's  </Text>
             <Text
            style={styles.TCHyperlink}
            onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
            <Text
            style={styles.TCtext}
           > and </Text>
             <Text
            style={styles.TCHyperlink}
            onPress={() => navigation.navigate('TermsService')}>Terms of Service</Text>
            </View>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        //padding: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
  text: {
    fontSize:12,
    marginVertical: 10
  },
  SignUptext: {
    fontSize:12,
    fontWeight:"400",
   
  },
  PasswordPromttext: {
    color:'rgba(64, 60, 79, 0.54)',
    fontSize:12,
    fontWeight:"400",
    
    
  },
  TCtext:{
    fontSize:10,
    fontWeight:"400",
  },
  SignUpHyperlink: {
    color: '#0D47A1',
    fontSize:12,
    fontWeight:"400",
    textDecorationLine: 'underline',
    
  },
  TCHyperlink:{
    color: '#0D47A1',
    fontSize:10,
    fontWeight:"400",
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
SignupCard:{
  width:328,
  height:32,
  backgroundColor: '#0D47A1',
  marginTop:8,
  marginLeft:16,
  marginBottom:8,
  borderRadius:4,
  alignItems:"center",
  alignContent:"center"
},
SignupCardText:{
  fontSize:14,
  fontWeight:"500",
  color:'white',
  alignItems:"center",
  marginTop:8
},


  space: 555
});

export default SignUpScreen;