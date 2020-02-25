import React from 'react';
import {
	SafeAreaView,
  	StyleSheet,
  	ScrollView,
  	View,
  	Text,
  	StatusBar,
  	Image,
  	Button,
  	BackHandler,
    ImageBackground
 } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from './style';

export default class SplashScreen extends React.Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentDidMount(){
		this.timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      this.loadData();
    }, 500);
	}

  loadData = async() => {
    AsyncStorage.setItem('url', 'http://192.168.0.197:28090');
    let loggedIn = await AsyncStorage.getItem('loggedIn');
    if (loggedIn !== null) {
      if (loggedIn === "true"){
        this.props.navigation.navigate('HomeScreen');
      }else{
        this.props.navigation.navigate('LoginScreen');
      }
    }else{
      AsyncStorage.setItem('url', 'http://192.168.0.197:28090');
      let firstTime=AsyncStorage.getItem('firstTime');
      if (loggedIn !== null) 
        this.props.navigation.navigate('SignUpScreen');
      else
        this.props.navigation.navigate('LoginScreen');
    }
  }

	render(){
		return (
			<>
				<View style={styles.body}>
		      <Image
                  style={{width:'80%'}}
                  source={require('./res/logo3.png')}
                  resizeMode="contain"
          />
		    </View>
			</>
		);
	}
}


