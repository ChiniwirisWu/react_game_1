import { Image, View, Pressable, StyleSheet, Text } from "react-native";

export default function Plant({ image, planted }){
  return(
    <View style={ styles.container }>
      <Pressable style={ styles.imageContainer }>
        <Image source={ image } style={ styles.image } />
      </Pressable>
      { planted ? (
        <Text style={ styles.text }>Click to play</Text>
      ) : (
        <Text style={ styles.text }>Get a plant at store</Text>
      ) }
      
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    position: 'absolute',
    alignItems: 'center',
    bottom: 200
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    width: 500,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 1
  },
  imageContainer: {
    width: 150,
    height: 200,
  }, 
  image: {
    width: 150,
    height: 200
  }
})
