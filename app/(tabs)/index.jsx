import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LookBookScreen = () => {
    const showAlert = (message) => {
        Alert.alert(
            'Alerta',
            message,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LookBook</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => showAlert('Conjunto presionado')}>
                    <Text>Conjunto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showAlert('Armario presionado')}>
                    <Text>Armario</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>Favoritos</Text>
            <View style={styles.favoritesContainer}>
                {[...Array(4)].map((_, index) => (
                    <View key={index} style={styles.customShape} />
                ))}
            </View>
        </View>
    );
};

export default LookBookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    favoritesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    customShape: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        margin: 10,
        borderRadius: 10, 
    },
});