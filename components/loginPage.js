
import React, { Component } from 'react';
import {StyleSheet,View, TouchableOpacity,ActivityIndicator, Text, Alert} from 'react-native';
import {Input, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../database/firebase';


export default class  loginPage extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render (){
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>
        <Card style = {styles.cardStyle}>
          <View>
            <Input
            label = 'Email'
              placeholder=' Email'
              autoCompleteType = 'email'
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            />
          </View>
          
          <View>
            <Input
            label = 'Password'
              placeholder='Password'
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              secureTextEntry={true}
              leftIcon={
                <Icon
                  name='key'
                  size={24}
                  color='black'
                />
              }
            />
          </View>
        </Card>
       
       
        <View  style = {styles.btns}> 
          <TouchableOpacity 
          style={styles.btnStyle}
          onPress={() => this.userLogin()}
          >
        <Text style={styles.txtstyle}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.alttyle}
        onPress={() => this.props.navigation.navigate('Signup')}
        >Don't have an account ? signup</Text>

        
        </View>
      </View>
        
    );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162447",
    justifyContent: "center",
    alignContent: "center"

  },  
  cardStyle: {
    justifyContent: "center",
    alignItems:"center",
  },

  btns:{
    
    justifyContent: "space-between",
    width: "100%",
    padding: 15
  },
  btnStyle: {
    backgroundColor: "#e43f5a",
    padding: 15, 
    width: "100%"  
  },
 
  txtstyle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  alttyle: {
    marginTop: 10,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15
  }
});