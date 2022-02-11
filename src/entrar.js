import React, { Component } from "react";
import { 
  View, 
  Text,
  Button,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Entrar extends Component {


  render() {
    return(      
        <View style={{backgroundColor: "#222", height: 350, width: "100%", borderRadius: 15}}>
            <Text style={{textAlign: "center", paddingTop: 15,color: "#fff", fontSize: 28}}>Seja bem vindo!</Text>
            <Button title="sair" onPress={this.props.sair} />
        </View>
    );
  };
};

