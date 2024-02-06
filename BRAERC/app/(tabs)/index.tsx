import { StyleSheet, ImageBackground, Image  } from 'react-native';

import { Botao } from '@/components/BRAERC/Button';
import { Comodo } from '@/components/BRAERC/Comodo';
import {  Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const handleButtonClick = () => {
    // Do something when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style = {styles.topo}>
          <ImageBackground style={styles.topoImagem} source={require("../../assets/images/Fundo.png")}>
            <Image style={styles.logo} source={require("../../assets/images/Logo.png")}></Image>
            <Text style={styles.title}>Quarto</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.caixaBotao}>
        <ImageBackground style={styles.backgroundImage} source={require("../../assets/images/Fundo.png")}>
          <View style={styles.titulo}>
            <Comodo texto="Quarto"></Comodo>
          </View>
          <View style={styles.linha}>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Ação 1"></Botao>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Modo 1"></Botao>
          </View>
          <View style={styles.linha}>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Ação 2"></Botao>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Modo 2"></Botao>
          </View>
          <View style={styles.linha}>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Ação 3"></Botao>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Modo 3"></Botao>
          </View>
          <View style={styles.linha}>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Ação 4"></Botao>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Modo 4"></Botao>
          </View>
          <View style={styles.linha}>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Ação 5"></Botao>
            <Botao containerStyle={styles.botao} onPress={handleButtonClick} texto="Modo 5"></Botao>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: '1%',
    marginLeft:'2%',
  },
  topo: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topoImagem: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titulo: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    marginTop: '-5%',
    marginLeft: '8%'
  },
  caixaBotao: {
    height: '30%',
    width: '100%',
  },
  botao: {
    paddingLeft: '7%'
  },
  linha: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1.5%',
    backgroundColor: "transparent",
  },
  backgroundImage: {
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
