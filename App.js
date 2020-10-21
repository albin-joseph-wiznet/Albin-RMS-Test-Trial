


/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TextAnimator from './src/TextAnimator';
import AnimatedImage from './src/ImageRotator';
import ImageLoader from './src/FadeIn'
import Routes from './src/Routes.js';

import BottomTabs from './src/screens/BottomTabs';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignfirst: true,
     // alignsecond: false,
      alignthird: false,
      alignforth: false,
      alignfifth: false,
    };

    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            //alignfirst:false,
           // alignsecond: true,
            alignthird: true,
          });
        }),
      3000
    );

    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignforth: true,
          });
        }),
      4000
    );

    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            align: 'center',
            alignfirst: false,
            //alignsecond: false,
            alignthird: false,
            alignforth: false,

            alignfifth: true,
          });
        }),
      7000
    );
  }

  render() {
    return (
      
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          //marginHorizontal: 130,
        }}>
          {!this.state.alignfirst ? null : (
        // <Image
        //   source={require('./assets/Boot_Logo/splash1.png',
        //   )}
        //   style={{ width: 35, height: 32.3 }}
        // />
        <AnimatedImage/>
        )}

        {/* {!this.state.alignsecond ? null : (
          <View
          style={{
            marginHorizontal: 130,
          }}>
          
            <Image
          source={require('./assets/Boot_Logo/splash2.png',
          )}
          style={{ width: 32.3, height: 35 }}
        />

          </View>
        )} */}
        {!this.state.alignthird ? null : (
          <View
          style={{
            right: 130,
          }}>
            <Image
          source={require('./assets/Boot_Logo/Duruper_logo_2.png',
          )}
          style={{ width: 100, height: 35 }}
        />
          </View>
        )}
        {!this.state.alignforth ? null : (
          <View
           style={{ 
            position: 'absolute',
            // left: 0,
             right: -40,
            top: 400.67,
            bottom: -16.67,
            marginHorizontal: 130,          
        }}>
            <TextAnimator 
             content="Giving wings to the ones who wish to fly" 
             textStyle={{ color: '#463C4F', fontSize: 12, fontWeight: 'normal', fontFamily: 'Roboto', lineHeight: 16  }}/>
          </View>
        )}

{!this.state.alignfifth ? null : (
       
      <Routes/>  
      
        )}
      </View>
    );
  }
}

