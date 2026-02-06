import { View } from "react-native";
import InstagramScreen from "../components/bottompart";
import BottomButtons from "./buttons";
import HeaderRow from "./header";


export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderRow />
      <InstagramScreen />
      <BottomButtons />
    </View>
  );
}
