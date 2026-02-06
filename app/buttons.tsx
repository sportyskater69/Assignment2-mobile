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
            source={require("../assets/images/Home-Icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/Search-Icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/Reel-Icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/Shop-Icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable onPress={() => { }}>
          <Image
            source={require("../assets/images/Profile-Icon.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </View>

    </View>
  )
}