import React, {Component} from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet
} from "react-native"

class Lista extends Component {
    constructor(props) {
        super(props),
        this.state = {
            feed: this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    mostraLikes(likers){
        let feed_likers = this.state.feed.likers;

        if (feed_likers <= 0){
            return;
        }

        return(
            <Text style={styles.likes}>
                {feed_likers} {feed_likers > 1 ? " Curtidas" : " Curtida"}
            </Text>
        )
    }

    like(){
        let feed = this.state.feed;
        
        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    carregaIcone(likeada) {
        return (likeada ? require("../img/likeada.png") : require("../img/like.png"))
    }

    render(){
        return(
            <View style={styles.areaFeed}>
               
                <View style={styles.viewPerfil}>
                    <Image 
                        style={styles.fotoPerfil}
                        source={{uri: this.state.feed.imgperfil}}
                    />
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image 
                    resizeMode="cover"
                    style={styles.fotoPublicacao} 
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                            source={(this.carregaIcone(this.state.feed.likeada))} 
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                            source={require(".././img/send.png")} 
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
                    <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
                </View>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    areaFeed: {},

    viewPerfil: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        flex: 1
    },
    
    fotoPerfil: {
        width: 45,
        height: 45,
        borderRadius: 22.5
    },

    nomeUsuario: {
        fontSize: 18,
        textAlign: "left",
        color: "#000"
    },

    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: "center"
    },

    areaBtn: {
        flexDirection: "row",
        padding: 8
    },

    iconeLike: {
        marginLeft: 7,
        width: 28,
        height: 28
    },

    btnSend: {
        paddingLeft: 10
    },

    viewRodape: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 2
    },

    descRodape: {
        paddingLeft: 7,
        color: "#000"
    },

    nomeRodape: {
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 7
    },

    likes: {
        fontWeight: "bold",
        marginLeft: 7
    }
})
export default Lista;