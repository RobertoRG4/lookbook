import React from 'react'; 
import { StyleSheet, Pressable, Text, View } from "react-native";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LookBook</Text>
      <View style={styles.header}>
        <Pressable style={styles.button} onPress={() => alert("Conjunto")}>
          <Text style={styles.buttonText}>Conjunto</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert("Armario")}>
          <Text style={styles.buttonText}>Armario</Text>
        </Pressable>
      </View>
      <View style={styles.favorites}>
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <View style={styles.favoriteItem}>
          <Text style={styles.favoriteText}>Nombre</Text>
        </View>
        <View style={styles.favoriteItem}>
          <Text style={styles.favoriteText}>Nombre</Text>
        </View>
        <View style={styles.favoriteItem}>
          <Text style={styles.favoriteText}>Nombre</Text>
        </View>
        <View style={styles.favoriteItem}>
          <Text style={styles.favoriteText}>Nombre</Text>
        </View>
      </View>
      <Pressable style={styles.addButton} onPress={() => alert("Agregar nuevo favorito")}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favorites: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  favoriteItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 5,
  },
  favoriteText: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
