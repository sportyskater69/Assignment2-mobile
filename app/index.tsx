import { View } from "react-native";
import InstagramScreen from "../components/bottompart";
import HeaderRow from "./header";


export default function Index() {
  return (
    <View>
      <HeaderRow />
      <InstagramScreen />
    </View>
  );
}
