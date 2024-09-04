import React, { useState } from 'react'; 
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Switch } from "react-native-ui-lib";

const Settings = () => {
    
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const [galleryEnabled, setGalleryEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ padding: 20, marginBottom:20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", }}>Configuracion</Text>
            </View>

            <View style={styles.margen}>
                <Text style={{padding:4}} >Camara</Text>
                <Switch
                    style={{marginLeft:"auto"}}
                    value={cameraEnabled}
                    onValueChange={(newValue) => {
                        setCameraEnabled(newValue);
                        console.log('Camara camara cambia a:', newValue);
                    }}
                />
            </View>
            <View style={styles.margen}>
                <Text style={{padding:4}}>Galeria</Text>
                <Switch
                    style={{marginLeft:"auto"}}
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
        padding: 10,
        borderWidth: 1,
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal:25,
     
       
        
        
    },
});
