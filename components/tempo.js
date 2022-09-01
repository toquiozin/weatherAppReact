import React from "react";
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props){
    return (
        <>
            <View style={styles.bloco}>
                <Text style={styles.texto}>Hora da Consulta: {props.data.date}</Text>
                <Text style={styles.texto}>Cidade: {props.data2.city_name}</Text>
                <Text style={styles.texto}>Temperatura: {props.data2.temp}°C</Text>
                <Text style={styles.texto}>Min: {props.data.min}°C</Text>
                <Text style={styles.texto}>Max: {props.data.max}°C</Text>
                <Text style={styles.texto}>Descrição: {props.data.description}</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    bloco: {
        width: 200,
        height: 200,
        justifyContent: "center",
        marginTop:20,
        color: '#fff',
    },
    texto:{
        marginTop: 10,
        color:'#000',
        fontSize: 18,
    }
})