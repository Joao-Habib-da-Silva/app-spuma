import {View, Text, StyleSheet, Image} from "react-native";
export default function Index() {
  return(
    <View style={style.container}>
        <View style={style.firstdiv}>
          <Image
            source={require("../../assets/IMG/logo.png")}
            style={style.image}
          />
        </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex:1,
    display: "flex",
    backgroundColor: "#02040f",

  },
  firstdiv:{
    width:"100%",
    height:200,
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    width: '100%',
    height: 100
  }
})