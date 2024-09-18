import React from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function Index()  {
  return (
    <View style={styles.form}>
      <View style ={styles.containerLogo}>
        <Image style= {styles.logo} source={require('../assets/images/logo.png')}>

        </Image>
      </View>
        <View style={styles.container}>
      <Text style={styles.white}>Olá, Felipe Melo</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.white}>Procurar...</Text>
    </View>
    <View style={styles.card2}>
      <Text style={styles.cartao}>Cartão de crédito</Text>
      <Text style={styles.fatura}>Fatura</Text>
      <Text style={styles.dinheiro}>R$ 1.500,00</Text>
      <Text style={styles.pagar}>Pagar Fatura</Text>

    </View>
    <View style={styles.card3}>
      <Text style={styles.cartao}>Conta</Text>
      <Text style={styles.fatura}>Saldo Disponivel</Text>
      <Text style={styles.dinheiro}>R$ 300,00</Text>
      <Text style={styles.transferir}>tranferir</Text>

    </View>
      </View>
     

  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor:'purple',
    padding: 30,
    height: '100%',
    color: 'white'
  },
  container: {
   color: 'white'
  },
  containerLogo: {
    marginBottom: 30,
    height: 100,
    paddingTop: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom:20
  },
  card2: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    marginBottom:30
  },
  card3: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    marginBottom:30
  }
});


