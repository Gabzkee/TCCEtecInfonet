import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';
import { CameraView, useCameraPermissions} from 'expo-camera';


export default function App() {


    const [permissao, solicitarPermissao] = useCameraPermissions();
    const [escaneando, setEscaneando] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');


    function lerCodigo(resultado) {

        setCodigo(resultado.data);
        setEscaneando(false);
    }


    function cadastrarProduto() {

        if (!codigo || !nome || !quantidade) {

            Alert.alert('Atenção', 'Preencher todos os campos!');
            return;
        }


        const produto = { codigo, nome, quantidade: Number(quantidade)};

        console.log(produto);


        Alert.alert(
            'Produto cadastrado!',
            `Nome: ${nome}\nCódigo: ${codigo}`
        );

        setCodigo('');
        setNome('');
        setQuantidade('');
    }


    if (!permissao) {
        return <View />;
    }


    if (!permissao.granted) {
        return (
            <View style={styles.container}>

                <Text>Necessário câmera.</Text>

                <TouchableOpacity
                    onPress={solicitarPermissao}
                    style={styles.botao}
                >
                    <Text style={styles.textoBotao}>
                        Permitir acesso a câmera
                    </Text>

                </TouchableOpacity>
                
            </View>
        );
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Cadastro de produtos
            </Text>

            {escaneando ? (

                <View style={styles.cameraContainer}>

                    <CameraView
                        style={styles.camera}
                        facing="back"
                        onBarcodeScanned={lerCodigo}
                        barcodeScannerSettings={{
                            barcodeTypes: [
                                'ean13',
                                'ean8',
                                'upc_a',
                                'upc_e'
                            ]
                        }}
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => setEscaneando(false)}
                    >
                        <Text style={styles.textoBotao}>
                            Cancelar
                        </Text>

                    </TouchableOpacity>

                </View>

            ) : (

                <>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => setEscaneando(true)}
                    >
                        <Text style={styles.textoBotao}>
                            Escanear código de barras
                        </Text>
                        
                    </TouchableOpacity>

                    <Text style={styles.label}>
                        Código de barras
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={codigo}
                        editable={false}
                        placeholder=" necessário escanar produto"
                    />

                    <Text style={styles.label}>
                        Nome do produto
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Informe o nome"
                    />

                    <Text style={styles.label}>
                        Quantidade
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={quantidade}
                        onChangeText={setQuantidade}
                        keyboardType="numeric"
                        placeholder="Informe a quantidade"
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={cadastrarProduto}
                    >
                        <Text style={styles.textoBotao}>
                            Cadastrar produto
                        </Text>

                    </TouchableOpacity>

                </>

            )}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#81979E',
        padding: 25,
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15
    },

    input: {
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 6,
        paddingHorizontal: 10,
        marginTop: 5
    },

    botao: {
        backgroundColor: '#474747',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    textoBotao: {
        color: '#fff',
        fontWeight: 'bold'
    },

    cameraContainer: {
        height: 400
    },

    camera: {
        flex: 1
    }

});
