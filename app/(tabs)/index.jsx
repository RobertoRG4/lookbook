import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const LookBookScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LookBook</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Text>Conjunto</Text></View>
                <View style={styles.button}><Text>Armario</Text></View>
            </View>
            <Text style={styles.sectionTitle}>Favoritos</Text>
            <View style={styles.favoritesContainer}>
                {[...Array(4)].map((_, index) => (
                    <View key={index} style={styles.placeholder}>
                    </View>
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
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
});