import { Text, FlatList, View, Image, Pressable, StyleSheet } from "react-native"
import { MaterialIcons, Foundation } from '@expo/vector-icons'

export default function PlantsList({ budget, planted, onPress }){
  const Data = [
    { title: 'plant_1', cost: 0, img: require('../assets/plant_1.png') },
    { title: 'plant_2', cost: 10, img: require('../assets/plant_2.png') },
    { title: 'plant_3', cost: 35, img: require('../assets/plant_3.png') },
    { title: 'plant_4', cost: 100, img: require('../assets/plant_4.png') },
  ]

  return (
    <FlatList
      data={ Data }
      renderItem={ ({ item, index })=> ( 
        <View style={ styles.itemContainer }>
          <View style={ styles.titleContainer }>
            <Text>Name: { item.title }</Text>
            <Text>Cost: { item.cost }$</Text>
            <Image source={ item.img } style={ { width: 50, height: 50 } } />
          </View>
          <View style={ styles.pressableContainer }>
            { budget >= item.cost && !planted ? (
              <Pressable style={[styles.pressable, { backgroundColor: "#fcc93a" }]} onPress={ (e)=> onPress(item.img, item.cost) } > 
                <MaterialIcons
                  name="shopping-bag"
                  size={ 20 }
                  color="#000"
                />
              </Pressable>
            ) : (
              <Pressable style={[styles.pressable, { backgroundColor: "#ddd" }]}>
                <Foundation
                  name="prohibited"
                  size={ 20 }
                  color="#000"
                />
              </Pressable>
            ) }
          </View>
        </View>
      ) }
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "90%", 
    margin: 'auto',
    marginVertical: 10,
    backgroundColor: "rgba(222, 189, 98, 0.8)",
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pressable: {
    borderWidth: 3,
    borderRadius: 2,
    padding: 10
  },
})
