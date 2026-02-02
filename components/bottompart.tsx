import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function InstagramScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/instagram-feed-layout-01.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    width: 415,
    height: 500,
    marginTop: 190,
    marginBottom: 180
  },
});
