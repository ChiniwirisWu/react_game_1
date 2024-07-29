import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Modal } from 'react-native';
import { useState } from 'react'
import Plant from './components/Plant';
import Budget from './components/Budget';
import Shop from './components/Shop';
import PlantShop from './components/PlantShop';

const background = require('./assets/background.jpeg')

export default function App() {
  const [plant, setPlant] = useState(require('./assets/plant_1.png'))
  const [budget, setBudget] = useState(0)
  const [isShopVisible, setIsShopVisible] = useState(true)

  const onCloseShop = ()=>{
    setIsShopVisible(false)
  }

  const onOpenShop = ()=>{
    setIsShopVisible(true)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ background } style={ styles.background }>
        <Budget budget={ budget } />
        <Shop onOpen={ onOpenShop } /> 
        <Plant image={ plant } style={ styles.plant } planted={ false } />
      </ImageBackground>
      <PlantShop onClose={ onCloseShop } isShopVisible={ isShopVisible } budget={ budget } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plant: {
    margin: 10
  }
});
