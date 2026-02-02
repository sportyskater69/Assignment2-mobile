import { Image, Pressable, View } from "react-native";

export default function BottomButtons() {
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 10
      }}>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </View>

    </View>
  )
}