
import { Pressable, Text, View } from "react-native";

export default function HeaderRow() {
    return (
        <View
            style={{
                borderWidth: 5,
                height: 500,
            }}>
            <View
                style={{
                    flexDirection: "row",
                    borderWidth: 5
                }}>
                <Pressable onPress={() => { }}>
                    <Text
                        style={{
                            fontSize: 50,
                            marginLeft: 20,
                            marginRight: 50,
                            marginTop: 10
                        }}>
                        {"<"}
                    </Text>
                </Pressable>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        height: 100,
                        marginTop: 15
                    }}>
                    <Text style={{}}>Your Profile</Text>
                    <Text style={{}}>Profile Name</Text>
                </View>
                <Text style={{ marginLeft: 80, marginRight: 15, marginTop: 15, marginBottom: 80, fontSize: 30 }}>+</Text>
            </View>
            <Text>Hi</Text>
        </View >
    );
}