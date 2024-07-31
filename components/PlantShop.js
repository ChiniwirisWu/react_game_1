import { Modal, View, StyleSheet, Pressable, Text } from "react-native"
import { MaterialIcons }  from "@expo/vector-icons"

export default function PlantShop({ isShopVisible, budget, onClose, children, planted }){
  return (
    <Modal animationType="slide" transparent={ true } visible={ isShopVisible }>
      <View style={ styles.modalContainer }>
        <View style={ styles.titleContainer }>
          { planted ? (
            <Text style={ styles.title }>Plant already cultivating...</Text>
          ) : (
            <Text style={ styles.title }>Choose a plant below...</Text>
          ) }
          <Pressable onPress={ onClose }>
            <MaterialIcons 
              name="close"
              size={ 20 }
              color='#ddd'
            />
          </Pressable>
        </View>
        { children }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    width: "90%",
    backgroundColor: "#a18433",
    height: "90%",
    borderRadius: 15,
    margin: 'auto',
    padding: 10
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textShadowColor: '#000',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
    color: '#ddd', 
    fontSize: 18
  }
})

