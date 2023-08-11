import { StyleSheet, Text, View , SafeAreaView,TouchableOpacity} from 'react-native';
import React from 'react';
import Card from './components/Card/Cards/Card'


export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
    <View style={styles.cardContainer}>
      <View style = {styles.cardBody}>
        <Text style={styles.cardTitle}>Mert Şahin</Text>
        <Text style = {styles.cardText}> Parayı bulmak lazım</Text>
      </View>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonTitle}>I LIKED</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardContainer}>
      <View style = {styles.cardBody}>
        <Text style={styles.cardTitle}>Atakan Baran</Text>
        <Text style = {styles.cardText}> Büyü Yapcam</Text>
      </View>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonTitle}>I LIKED</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardContainer}>
      <View style = {styles.cardBody}>
        <Text style={styles.cardTitle}>İlker Ören</Text>
        <Text style = {styles.cardText}>Waffleci ne kadar kazaghjtjniyor</Text>
      </View>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonTitle}>I LIKED</Text>
      </TouchableOpacity>
    </View>
    <Card title = "Ali Veli" text = "Al parayı bul karayı"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
   
  },
  cardContainer:{
    backgroundColor:'white',
    margin: 10,
    borderWidth:1,
    borderColor:'gray',
    borderRadius: 10,
    marginTop: 25,
    

  },
  cardBody: {
    padding: 10,

  },
  cardTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
    marginBottom: 3,
  },
  cardText:{
    fontSize: 16,
    margin:10,
    marginTop: 3,
  },
  cardButton:{
    backgroundColor:'#00C2FF',
    padding: 10,
    alignItems:'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,  
  },
  cardButtonTitle:{
    fontWeight:'bold',
    color: 'white',
    fontSize:18,
  }
});
