import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default class Filmes extends Component {

    render() {
        const {nome, foto} = this.props.data;
        return(
            <View>
                
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image style={styles.capa} source={{uri: foto}}/>
                
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => {alert(nome)}}>
                            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor :"#fff",
        
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        elevation: 3,
        shadowRadius: 5,
        
        margin: 15,
        borderRadius: 5
    },

    titulo: {
        fontSize: 18,
        padding: 15 
    },

    capa: { 
        height: 250,
        zIndex: 2
    },

    areaBotao: {
        alignItems: "flex-end",
        marginTop: -40,
        zIndex: 9
    },

    botao: {
        width: 100,
        backgroundColor: "#09A6FF",
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    botaoTexto: {
        textAlign: "center",
        color: "#fff"
    },
});