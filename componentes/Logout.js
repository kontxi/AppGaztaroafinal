import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class LogoutScreen extends Component {


render() {
  const { navigate } = this.props.navigation;
    return(
      <View style={styles.contianer}>
        <View style={styles.headerView}>
          <Text>¿Estás seguro de cerrar sesión?</Text>
        </View>

      <View style={styles.button}>
        <Button title="SI" onPress={() => navigate('SignUp')} style={styles.button }/>
      </View>
      <View style={styles.button}>
        <Button title="Cancelar" onPress={() => navigate('Home')} style={styles.button }/>
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

export default LogoutScreen;
