import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

updateInputState = (key, val) => {
    if(key === "email"){
      this.setState(prevState => {
        return{
          ...prevState,
          email: val
        }
      });
    }
    if(key === "password"){
      this.setState(prevState => {
        return{
          ...prevState,
          password: val
        }
      });
    }
  };
loginHandler = () => {
    const apiKey = "AIzaSyDzG75KKvONYCmIb9ONoMtGJvzr1EXq0R0";
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      apiKey;
fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        if (!parsedRes.idToken) {
          alert("Usuario incorrecto!");
        } else {

              const { navigate } = this.props.navigation;
              return(
                navigate('Home')
              )

        }
      });
  };
render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.contianer}>
        <View style={styles.headerView}>
          <Text style={styles.header}>Iniciar Sesión</Text>
        </View>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={val => this.updateInputState("email", val)}
          underlineColorAndroid="#1E90FF"
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={val => this.updateInputState("password", val)}
          underlineColorAndroid="#1E90FF"
          style={styles.input}
          secureTextEntry
        />
      <View style={styles.button}>
        <Button title="Iniciar Sesión" onPress = {this.loginHandler} style={styles.button } disabled={(this.state.email === "" || this.state.password === "")}/>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerView: {
    marginBottom: 20
  },
  header: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#1E90FF"
  },
  text: {
    color: "black"
  },
  navigateText: {
    color: "#1E90FF"
  },
  input: {
    width: "70%"
  },
  button: {
    marginTop: 15,
    marginBottom: 15
  }
});
export default LoginScreen;
