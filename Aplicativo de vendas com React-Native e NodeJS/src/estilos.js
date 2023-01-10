import React from 'react';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    viewTela1: {
        flexGrow: 1,
        // margin:10,
        justifyContent: 'center',
    },
    txtInp: {
        width: 200,
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 20,
        marginLeft: 100,
        color: '#add8e6',
        borderColor: '#6959CD',
    },
    txtLoginUsuario: {
        fontSize: 50,
        color: '#6959CD',
        marginLeft: 110,
    },
    txtLoginSenha: {
        fontSize: 50,
        color: '#6959CD',
        marginLeft: 130,
    },
    btnLoginSteam: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
        marginLeft: 50,
        marginTop: 30,
    },
    btnLoginCadastrar: {
        height: 50,
        width: 100,
        resizeMode: 'contain',
        marginLeft: 50,
    },
    viewModalCadastrar: {
        flexGrow: 1,
    },
    txtModalCadastrar: {
        fontSize: 40,
        color: '#6959CD',
        marginTop: 5,
    },
    imgCounterStrike: {
        height: 350,
        width: 400,
        // resizeMode:'contain',
    },
    txtInpModal: {
        width: 200,
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 20,
        marginLeft: 100,
        marginTop: 10,
        color: '#000000',
    },
    logoFundoHome: {
        height: 208,
        width: 390,
        marginLeft: 2,
        marginTop: 10,
    },
    txtBoasVindas: {
        fontSize: 30,
        color: '#ffffff',
        // backgroundColor:'#00FFFF',
        alignItems: 'center',
        marginBottom: 40,
    },
    txtPesquisar: {
        fontSize: 40,
        color: '#000000',
        // backgroundColor:'#ffffff',
    },
    btnLoginPesquisar: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
        marginLeft: 100,
        marginTop: 40,
        marginBottom: 120,
        borderRadius: 10,
    },
    viewAks: {
        borderRadius: 10,
        borderColor: '#000000',
    },
    imgAKS: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
    },
    checkbox: {
        alignSelf: "center",
    },
    viewItens: {
        display: 'flex' ,
        flexDirection: 'row',
    },
    viewInfoItens:{
        justifyContent:'center',
        fontSize:12,
        color:'#000000',
    },
    imgUser: {
        height: 40,
        width: 60,
        resizeMode: 'contain',
        marginLeft:300,
    },
    btnSair:{
        height: 40,
        width: 60,
        resizeMode: 'contain',
        marginLeft:300,
    },
    txtCompra:{
        fontSize:20,
        color:'#000000',
    },
    btnFinalizarCompra:{
        height: 50,
        width: 100,
        resizeMode: 'contain',
        marginLeft: 50,
        marginTop:20,
    },
    txtPadrao:{
        fontSize:12,
        color:'#000000',
    },
})

export default estilo;