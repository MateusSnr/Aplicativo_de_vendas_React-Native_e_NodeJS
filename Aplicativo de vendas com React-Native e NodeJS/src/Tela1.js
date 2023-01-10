import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight, Image, ImageBackground, Modal, Alert } from 'react-native';
import { Component } from 'react';
import estilo from './estilos';

function Tela1({ navigation }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [teste, setTeste] = useState("");
    const [visibleModal, setVisibleModal] = useState(false);
    const [novoUsuario, setNovoUsuario] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [cadastros, setCadastros] = useState([["Joao", "abc1r1"], ["Jose", "fy63u*"], ["MaLu", "th678"], ["Luck", "lsji48se"], ["Hansol",
        "stwr478"]]);

    let flag = 0;

    function verificarCredencias() {

        let auxUsuario = usuario;
        let auxSenha = senha;

        setUsuario("");
        setSenha("");
        setTeste("");

        for (let x = 0; x <= cadastros.length - 1; x++) {
            for (let y = 1; y <= 1; y++) {
                if (((cadastros[x][0]) == auxUsuario) && (cadastros[x][y]) == auxSenha) {
                    setTeste("Login válido!!");
                    flag = 1;
                }
            }
        }

        if (flag == 0) {
            Alert.alert("Usuário não cadastrado!", "Cadastre-se para ter acesso...");
        }
        else{
            navigation.navigate('Tela2');
        }
    }

    function inserirNovoCadastro() {

        let auxNovoUsuario = novoUsuario;
        let auxNovaSenha = novaSenha;

        setNovoUsuario("");
        setNovaSenha("");

        setCadastros(current => [...current, [auxNovoUsuario, auxNovaSenha]]);

    }

    return (

        <View style={estilo.viewTela1}>
            <ImageBackground
                source={require('../src/assets/fundos/csGoFundo1.png')}
                style={estilo.viewTela1}
            >
                <Image
                    source={require('../src/assets/fundos/pratasstore2.png')} style={estilo.logoFundoHome}
                />
                {/* <Text>{teste}</Text> */}
                <Text style={estilo.txtLoginUsuario}>Usuário</Text>
                <TextInput
                    style={estilo.txtInp}
                    value={usuario}
                    onChangeText={(usuario) => setUsuario(usuario)}
                    placeholder="User">
                </TextInput>
                <Text style={estilo.txtLoginSenha}>Senha</Text>
                <TextInput
                    style={estilo.txtInp}
                    value={senha}
                    onChangeText={(senha) => setSenha(senha)}
                    placeholder="Password">
                </TextInput>

                <TouchableHighlight onPress={verificarCredencias}
                    activeOpacity={0.6}
                >
                    <Image source={require('../src/assets/botoes/entrar.png')} style={estilo.btnLoginSteam}></Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setVisibleModal(true)}>
                    <Image source={require('../src/assets/botoes/cadastre-se.png')} style={estilo.btnLoginCadastrar}></Image>
                </TouchableHighlight>

                <Modal
                    visible={visibleModal}
                    onRequestClose={() => setVisibleModal(false)}
                    style={estilo.viewTela1}
                >
                    <View style={estilo.viewTela1}>
                        <ImageBackground
                            source={require('../src/assets/fundos/fundoModalCadastrar.png')}

                        >
                            <View style={estilo.viewTela1}>
                                <Text style={estilo.txtModalCadastrar}>Inserir dados:</Text>
                                <TextInput style={estilo.txtInpModal} placeholder='Usuário' value={novoUsuario} onChangeText={(novoUsuario) => setNovoUsuario(novoUsuario)}></TextInput>
                                <TextInput style={estilo.txtInpModal} placeholder='Senha' value={novaSenha} onChangeText={(novaSenha) => setNovaSenha(novaSenha)}></TextInput>
                                <TouchableHighlight onPress={inserirNovoCadastro}>
                                    <Image source={require('../src/assets/botoes/salvar.png')} style={estilo.btnLoginCadastrar}></Image>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => setVisibleModal(false)}>
                                    <Image source={require('../src/assets/botoes/back.png')} style={estilo.btnLoginCadastrar}></Image>
                                </TouchableHighlight>
                                <Image
                                    source={require('../src/assets/fundos/counterStrike.png')}
                                    style={estilo.imgCounterStrike}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </Modal>
            </ImageBackground>
        </View >
    )
}

export default Tela1