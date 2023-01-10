import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight, Image, ImageBackground, Modal, Alert, Switch } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Component } from 'react';
import estilo from './estilos';
import { ScrollView } from 'react-native-gesture-handler';

function Tela5({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const pix = () => setIsEnabled(previousState => !previousState);

    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [visibleModalCompra, setVisibleModalCompra] = useState(false);

    function alertaRetornoPesquisa() {
        Alert.alert("Compra realizada!", "Retornando para a tela de pesquisa...");
        navigation.navigate('Tela2');
    }

    function retornarHome() {
        Alert.alert("Saindo da conta!", "Retornando para tela inicial...");
        navigation.navigate('Home')
    }
    return (
        <View style={estilo.viewTela1}>
            <ImageBackground
                source={require('../src/assets/fundos/FUNDOitens.png')}
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
                <View style={estilo.viewItens}>
                    <Image
                        source={require('../src/assets/AWP/awp_asiimov.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                            R$ 651,41
                        </Text>
                        <Text>
                            Estado: Testada em campo
                        </Text>
                        <CheckBox
                            value={isSelected1}
                            onValueChange={setSelection1}
                            style={estilo.checkbox}
                        />
                    </View>
                </View>

                <View style={estilo.viewItens}>
                <Image
                        source={require('../src/assets/AWP/awp_atheris.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                            R$ 16,77
                        </Text>
                        <Text>
                            Estado: Pouco usada
                        </Text>
                        <CheckBox
                            value={isSelected2}
                            onValueChange={setSelection2}
                            style={estilo.checkbox}
                        />

                    </View>
                </View>

                <View style={estilo.viewItens}>
                <Image
                        source={require('../src/assets/AWP/awp_dragonlore.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                            R$ 60.497,98
                        </Text>
                        <Text>
                            Estado: Nova de fábrica
                        </Text>
                        <CheckBox
                            value={isSelected3}
                            onValueChange={setSelection3}
                            style={estilo.checkbox}
                        />

                    </View>
                </View>

                <View style={estilo.viewItens}>
                <Image
                        source={require('../src/assets/AWP/awp_gungnir.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                            R$ 53.586,65
                        </Text>
                        <Text>
                            Estado: Nova de fábrica
                        </Text>
                        <CheckBox
                            value={isSelected4}
                            onValueChange={setSelection4}
                            style={estilo.checkbox}
                        />
                    </View>
                </View>
                <View style={estilo.viewItens}>
                <Image
                        source={require('../src/assets/AWP/awp_hyper_beast.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                           R$ 310,99
                        </Text>
                        <Text>
                            Estado: Nova de fábrica
                        </Text>
                        <CheckBox
                            value={isSelected5}
                            onValueChange={setSelection5}
                            style={estilo.checkbox}
                        />

                    </View>
                </View>
                <View style={estilo.viewItens}>
                <Image
                        source={require('../src/assets/AWP/awp_redline.png')}
                        style={estilo.imgAKS}
                    />
                    <View style={estilo.viewInfoItens}>
                        <Text>
                           $ 1.000.000,00
                        </Text>
                        <Text>
                            Estado: Confia no Verdadeiro
                        </Text>
                        <CheckBox
                            value={isSelected6}
                            onValueChange={setSelection6}
                            style={estilo.checkbox}
                        />
                    </View>
                </View>

                <TouchableHighlight
                    onPress={() => setVisibleModalCompra(true)}
                >
                    <Image source={require('../src/assets/botoes/COMPRAR.png')} style={estilo.btnLoginCadastrar}
                    />
                </TouchableHighlight>
            </ImageBackground>

            <Modal
                visible={visibleModalCompra}
                onRequestClose={() => setVisibleModalCompra(false)}
                style={estilo.viewTela1}
            >
                <View style={estilo.viewTela1}>
                    <ImageBackground
                         source={require('../src/assets/fundos/boacompra.png')}
                         style={estilo.viewTela1}
                    >
                        <Text style={estilo.txtCompra}>Forma de pagamento:</Text>
                        <Text style={estilo.txtCompra}>PIX</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={pix}
                            value={isEnabled}
                        />
                        <Text style={estilo.txtCompra}>Cartão de crédito</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={pix}
                            value={!isEnabled}
                        />
                        <TouchableHighlight onPress={() => setVisibleModalCompra(false)}>
                            <Image source={require('../src/assets/botoes/back.png')} style={estilo.btnLoginCadastrar}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={alertaRetornoPesquisa}>
                            <Image source={require('../src/assets/botoes/finalizarCompra.png')} style={estilo.btnFinalizarCompra}></Image>
                        </TouchableHighlight>
                    </ImageBackground>
                </View>
            </Modal>
        </View>
    )
}

export default Tela5;