import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight, Image, ImageBackground, Modal, Alert } from 'react-native';
import { Component } from 'react';
import estilo from './estilos';

function Tela2({ navigation }) {
    const [item, setNovoItem] = useState("");

    function verificarItemBusca() {
        let auxItem = item.toLowerCase();

        if (auxItem == 'ak') {
            navigation.navigate('Tela3');
        }
        else if (auxItem == 'faca') {
            navigation.navigate('Tela4');
        }
        else if(auxItem == 'awp'){
            navigation.navigate('Tela5');
        }
        else if(auxItem == 'm4') {
            navigation.navigate('Tela6');
        }
        else{
            Alert.alert("Item não encontrado!", "Tente com outro item...");
        }
    }

    function retornarHome() {
        Alert.alert("Saindo da conta!", "Retornando para tela inicial...");
        navigation.navigate('Home')
    }

    return (
        <View style={estilo.viewTela1}>
            <ImageBackground
                source={require('../src/assets/fundos/telapesquisa.png')}
                style={estilo.viewTela1}
            >
                <TouchableHighlight
                    onPress={retornarHome}
                >
                    <Image source={require('../src/assets/botoes/sair.png')} style={estilo.btnSair}
                    />
                </TouchableHighlight>
                <Image
                    source={require('../src/assets/fundos/user.png')}
                    style={estilo.imgUser}
                />
                <Text
                    style={estilo.txtBoasVindas}
                >Seja Bem-vindo ao Prata´s Store a melhor loja de skins de CS-GO!!</Text>
                <Text
                    style={estilo.txtPesquisar}
                >Pesquisar por:</Text>

                <TextInput
                    style={estilo.txtInpModal}
                    placeholder='Item'
                    value={item}
                    onChangeText={(item) => setNovoItem(item)}
                >
                </TextInput>

                <TouchableHighlight onPress={verificarItemBusca}>
                    <Image source={require('../src/assets/botoes/PESQUISARCOMLUPA.png')} style={estilo.btnLoginPesquisar}></Image>
                </TouchableHighlight>

                {/* <Text
                    style={estilo.txtPesquisar}
                >Clique acima para pesquisar! </Text> */}


            </ImageBackground>
        </View>
    )
}

export default Tela2;