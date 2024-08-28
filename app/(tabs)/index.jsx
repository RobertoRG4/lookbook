import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-ui-lib";

const Index = () => {
  return (
    <View style={Styles.Container}>
      <Text>Hola mundo</Text>
      <Button
        onPress={() => Alert.alert("Hola mundo")}
        label={"Button"}
        style={Styles.Button}
      />
    </View>
  );
};

export default Index;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    margin: 20,
    padding: 20,
  },
});
