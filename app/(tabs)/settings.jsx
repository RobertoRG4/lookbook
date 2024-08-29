import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View, ViewComponent} from "react-native";

const Settings =() =>{
    return(
        <View style={styles.container}>
            <Text>
                Hola Roberto
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',    },
});

export default Settings;

