import { View, Text } from "react-native-ui-lib";
import { StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Create = () => {
  return (
    <View style={[Styles.Container]}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Agregar </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Pressable
          onPress={() => Alert.alert("alerta")}
          style={{
            padding: 10,
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={{ padding: 4 }}>Agregar Conjunto</Text>
          <AntDesign
            name="book"
            size={24}
            color="black"
            style={{ marginLeft: "auto" }}
          />
        </Pressable>
        <Pressable
          onPress={() => Alert.alert("alerta2")}
          style={{
            padding: 10,
            borderWidth: 1,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ padding: 4 }}>Crear Conjunto</Text>
          <MaterialIcons
            name="create"
            size={24}
            color="black"
            style={{ marginLeft: "auto" }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Create;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  TextContainer: {
    padding: 20,
  },
  Options: {
    padding: 20,
    borderWidth: 1,
  },
});
