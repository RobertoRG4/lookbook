import React from 'react'; 
import { StyleSheet, Pressable, Text, View, Dimensions } from "react-native";
import Constants from "expo-constants";

const { width } = Dimensions.get('window');
const itemSize = (width - 60) / 2; // Ajuste para dos columnas con márgenes

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
        <View style={styles.grid}>
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
      </View>
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
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  favoriteItem: {
    width: itemSize,
    height: itemSize,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 16,
  },
});