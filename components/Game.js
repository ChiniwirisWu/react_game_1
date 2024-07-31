import { View ,Modal, FlatList, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";



export default function Game({ img, question, answers, onPress }){
  const rewards = {
    '../assets/plant_1.png': 10,
    '../assets/plant_2.png': 30,
    '../assets/plant_3.png': 55,
    '../assets/plant_4.png': 80,
  }

  const reward = rewards[img]
  
  return (
    <View style={ styles.container }>
      <View style={ styles.questionContainer }>
        <Text style={ styles.title }>Question:</Text>
        <Text style={ styles.question }>{ question }?</Text>
      </View>
      <FlatList 
        data={ answers }
        contentContainerStyle={ {textAlign: 'center'} }
        renderItem={({ item, index })=>(
          <Pressable style={ styles.answerContainer } onPress={ ()=> onPress( item, reward ) }>
            <Text>Option ({ index + 1}): { item }</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    position: 'absolute', 
    top: 60,
    backgroundColor: "#39405c",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
  questionContainer: {
    width: '100%',
    height: 200,
    backgroundColor: "#eee",
    borderWidth: 3,
    borderRadius: 15,
    padding: 5,
  },
  question: {
    fontSize: 20
  },
  answerContainer: {
    height: 100,
    width: '100%',
    backgroundColor: "#eee",
    borderWidth: 3,
    borderRadius: 15,
    padding: 5,
    marginTop: 10
  },
  answer: {
    fontSize: 30,
    textAlign: 'center'
  },
})
