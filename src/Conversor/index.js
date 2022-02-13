import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from "react-native";

import api from "../services/api.js";

class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaA_valor: 0,
            valorConvertido: 0
        }

        this.converter = this.converter.bind(this)
    }

    async converter(){
        const {moedaA, moedaB} = this.props
        const de_para = moedaA + "_" +  moedaB

        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)

        let cotacao = response.data[de_para];
        let resultado = (cotacao * parseFloat(this.state.moedaA_valor));

        this.setState({
            valorConvertido: resultado.toFixed(2)
        })

        // Fechar o teclado automaticamente
        Keyboard.dismiss();
    }

    render(){
        const {moedaA, moedaB} = this.props
     
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput 
                    placeholder="Valor a ser convertido: "
                    style={styles.areaInput}
                    onChangeText={(moedaA_valor) => {this.setState({moedaA_valor})}}
                    keyboardType={"numeric"}
                />

                <TouchableOpacity style={styles.areaBotao} onPress={this.converter}>
                    <Text style={styles.textoBotao}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>
                    {this.state.valorConvertido === 0 ? "" : this.state.valorConvertido}
                </Text>
            </View>
        );
    };

};

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    },

    titulo: {
        fontSize: 30,
        fontWeight :"bold",
        color: "#000"
    },

    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: "#ccc",
        textAlign: "center",
        marginTop: 15,
        fontSize: 20,
        color: "#000",
        borderRadius: 5
    },

    areaBotao: {
        width: 150,
        height: 45,
        backgroundColor: "#ff0000",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },

    textoBotao: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff"
    },

    valorConvertido: {
        fontSize: 30,
        fontWeight: "bold",

        color: "#000",
        marginTop: 15
    }
})
export default Conversor;