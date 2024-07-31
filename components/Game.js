import { Modal, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const getGame = ()=>{
  return ['Probability of 3/8 in percentage...(without decimals)', 37]
}


export default function Game({ img }){
  const rewards = {
    '../assets/plant_1.png': 10,
    '../assets/plant_2.png': 20,
    '../assets/plant_3.png': 55,
    '../assets/plant_4.png': 80,
  }
  
  const [question, answer] = getGame()


  
}
