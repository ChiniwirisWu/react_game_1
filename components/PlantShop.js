import { Modal, View, StyleSheet, Pressable, Text } from "react-native"
import { MaterialIcons }  from "@expo/vector-icons"

export default function PlantShop({ isShopVisible, budget, onClose }){
  return (
    <Modal animationType="slide" transparent={ true } visible={ isShopVisible }>
      <View style={ styles.modalContainer }>
        <View style={ styles.titleContainer }>
          <Text style={ {color: '#ddd', fontSize: 18} }>Choose a plant below</Text>
          <Pressable onPress={ onClose }>
            <MaterialIcons 
              name="close"
              size={ 20 }
              color='#ddd'
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    width: "90%",
    backgroundColor: "#201d42",
    height: "90%",
    borderRadius: 15,
    margin: 'auto',
    padding: 10
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

