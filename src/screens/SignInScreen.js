import React from 'react';
import { Text,StyleSheet, View, Button,Image, TouchableOpacity , TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-paper';
//import ForgotPass from './ForgotPassScreen';

const SignScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [Change, handleChange] = React.useState('bla1');
  //const [Blur, handleBlur] = React.useState('bla2');
  return (
    <View style={{ backgroundColor: "white", fontSize: 20,paddingLeft:16}}>
       <Text  style={{ fontSize: 20,  fontWeight: 400, fontFamily:' Roboto', color: 'black',textAlign: 'left'}}>Sign in</Text>
       <View style={styles.container}>{/*
          <TextInput
                  label='Email or username'
                  mode='outlined'
                  theme={{ colors: { underlineColor:'red',}}}
                  style={ {borderColor: 'black', borderColor: 'black',fontStyle: 'italic', color: 'white'}} 
                  selectionColor='red'
                  underlineColor='red'
                  placeholder='name@example.com'
                  keyboardType='email-address'
                  underlineColorAndroid='transparent'
                  autoCorrect='false'
                  autoCapitalize='none'
                  onChangeText={text => setText(text)}
                  onBlur={text => setText(text)}
                  //autoFocus
       />*/}
      <TextInput
        //style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10 }}
        //placeholder="Email address "
        label="Email address"
        mode='outlined'
        
        
          value={text}
      onChangeText={text => setText(text)}
       
      />
<TextInput
        //style={{ height: 40, backgroundColor: "white", fontSize: 20, borderColor:'gray', borderWidth:1, padding: 10, margin: 10 }}
        //placeholder="Password"
        label="Password"
        mode='outlined'
        theme={{ colors: { primary: 'red',underlineColor:'transparent',borderColor: 'pink'}}}
      value={text}
      onChangeText={text =>setText("blaze hehe")}
      />
      <Text
            style={styles.hyperlinkStyle}
            onPress={() => navigation.navigate('ForgotPass')}>Forgot Password?</Text>
    
    <TouchableHighlight 
                style ={{
                   
                    width: 328,
                    height: 32,
                   
                    backgroundColor: '#0D47A1',
                }}>
            <Button color='#0D47A1' onPress={() => navigation.navigate('Home')}            
            title="Sign In"
            accessibilityLabel="Learn more about this button"
          /> 
          </TouchableHighlight> 
      <View style={{flexDirection: 'row'}}>
      <Text
            style={styles.SignUptext}
           >Haven't registered with us yet ? </Text>
             <Text
            style={styles.SignUpHyperlink}
            onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
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

export default SignScreen;