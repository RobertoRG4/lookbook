import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import Constants from "expo-constants";
import { Switch } from "react-native-ui-lib";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Settings = () => {
    
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const [galleryEnabled, setGalleryEnabled] = useState(false);

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
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Configuracion</Text>
            </View>

            <View style={styles.margen}>
                <Text style={{ fontWeight: "bold" }}>Camara</Text>
                <Switch
                    value={cameraEnabled}
                    onValueChange={(newValue) => {
                        setCameraEnabled(newValue);
                        console.log('Camara camara cambia a:', newValue);
                    }}
                />
            </View>
            <View style={styles.margen}>
                <Text style={{ fontWeight: "bold" }}>Galeria</Text>
                <Switch
                    value={galleryEnabled}
                    onValueChange={(newValue) => {
                        setGalleryEnabled(newValue);
                        console.log('Galeria galeria cambia a:', newValue);
                    }}
                />
            </View>

            <Text style={styles.sectionTitle}>Favoritos</Text>
            <View style={styles.favoritesContainer}>
                {[...Array(4)].map((_, index) => (
                    <Pressable
                        key={index}
                        onPress={() => showAlert(`Favorito ${index + 1} presionado`)}
                        style={styles.customShape}
                    >
                        <AntDesign name="heart" size={24} color="black" />
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    margen: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        borderRadius: 10, // Puedes ajustar esto para cambiar la forma
        justifyContent: 'center',
        alignItems: 'center',
    },
});
