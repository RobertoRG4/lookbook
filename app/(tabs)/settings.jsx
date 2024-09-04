import React, { useState } from 'react'; 
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Switch } from "react-native-ui-lib";

const Settings = () => {
    
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const [galleryEnabled, setGalleryEnabled] = useState(false);

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
});
