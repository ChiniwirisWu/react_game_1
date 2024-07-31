import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Modal } from 'react-native';
import { useState } from 'react'
import Plant from './components/Plant';
import Budget from './components/Budget';
import Shop from './components/Shop';
import PlantShop from './components/PlantShop';
import PlantsList from './components/PlantsList';
import Game from './components/Game';

const background = require('./assets/background.jpeg')

export default function App() {
  const [plant, setPlant] = useState(require('./assets/plant_0.png'))
  const [plantUrl, setPlantUrl] = useState('./assets/plant_0.png')
  const [budget, setBudget] = useState(60)
  const [gameStarted, setGameStarted] = useState(false)
  const [isShopVisible, setIsShopVisible] = useState(false)
  const [isPlanted, setIsPlanted] = useState(false)
  const [question, setQuestion] = useState('Probability of 3/8 in percentage...(without decimals)')
  const [correct, setCorrect] = useState(37)
  const [answers, setAnswers] = useState([37, 40,50,20])

  const onCloseShop = ()=>{
    setIsShopVisible(false)
  }

  const onOpenShop = ()=>{
    setIsShopVisible(true)
  }

  const onChoosePlant = (img, cost, imgUrl)=>{
    setPlant(img)
    setPlantUrl(imgUrl)
    setBudget(budget - cost)
    setIsShopVisible(false)
    setIsPlanted(true)
  }

  const onGameStarted = ()=>{
      setGameStarted(true)
  }

  const showResultModal = ()=>{

  }

  const onCheckResult = ( result, reward )=>{
    if(parseInt(result) == parseInt(correct)){
      setBudget(parseInt(budget) + parseInt(reward))
    }
    setIsPlanted(false)
    setGameStarted(false)
    setPlant(require('./assets/plant_0.png'))
    setPlantUrl('./assets/plant_0.png')
    showResultModal(result == correct)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ background } style={ styles.background }>
        <Budget budget={ budget } />
        <Shop onOpen={ onOpenShop } /> 
        <Plant image={ plant } style={ styles.plant } planted={ isPlanted } onPress={ onGameStarted } />
      </ImageBackground>
      <PlantShop onClose={ onCloseShop } isShopVisible={ isShopVisible } budget={ budget } planted={ isPlanted }>
        <PlantsList budget={ budget } planted={ isPlanted } onPress={ onChoosePlant } />
      </PlantShop>
      { gameStarted ? (
        <Game img={ plantUrl } question={ question } answers={ answers } onPress={ onCheckResult } />
      ) : (
        <></>
      ) }
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
