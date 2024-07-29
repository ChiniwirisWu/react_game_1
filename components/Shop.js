import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Shop({ onOpen }){
  return (
    <View style={ styles.container }>
      <Pressable onPress={ onOpen }>
        <View style={ styles.budgetContainer }>
          <Text style={ styles.text }>Shop</Text>
          <MaterialIcons
            name="shop"
            size={ 30 }
            color="#000"
            style={ styles.icon }
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    position: 'absolute', 
    top: 60
  }, 
  budgetContainer: {
    width: 100,
    position: 'absolute',
    top: 10,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#fff',
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
  },
  icon: {
    backgroundColor: '#abeb21',
    position: 'absolute',
    right: 0,
    borderRadius: 40,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
