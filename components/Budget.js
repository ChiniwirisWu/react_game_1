import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Budget({ budget }){
  return (
    <View style={ styles.container }>
      <View style={ styles.budgetContainer }>
        <Text style={ styles.text }>{ budget } coins</Text>
        <MaterialIcons
          name="attach-money"
          size={ 30 }
          color="#000"
          style={ styles.icon }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    position: 'absolute', 
    top: 10
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
