
import { Pressable, Text, View } from "react-native";

export default function Headerrow() {
    return (
        <View
            style={{
                flexDirection: "row",
                borderWidth: 5,
                height: 500
            }}>

            <Pressable onPress={() => { }}>
                <Text
                    style={{
                        fontSize: 50,
                        borderRadius: 5,
                        marginRight: 50
                    }}>
                    ⬅️
                </Text>
            </Pressable>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    borderWidth: 5
                }}>
                <Text style={{}}>Your Profile</Text>
            </View>
            <Text style={{ padding: 50 }}>Hi</Text>
        </View>
    );
}