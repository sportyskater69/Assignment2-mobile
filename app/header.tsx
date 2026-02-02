
import { Button, Image, Pressable, Text, View } from "react-native";

export default function HeaderRow() {
    return (
        <View
            style={{}}>
            <View
                style={{
                    flexDirection: "row",
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
                        marginTop: 15
                    }}>
                    <Text style={{}}>Your Profile</Text>
                    <Text style={{}}>Profile Name</Text>
                </View>
                <Text style={{ marginLeft: 80, marginRight: 15, marginTop: 15, marginBottom: 30, fontSize: 30 }}>+</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}>
                <Image source={require("../assets/images/icon.png")}
                    style={{ height: 50, width: 50, marginLeft: 20, marginTop: 20 }} />
                <View style={{ marginLeft: 30, padding: 15 }}>
                    <Text>Number</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ padding: 15 }} >
                    <Text>Number</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ padding: 15 }}>
                    <Text>Number</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
                <Text>Placeholder</Text>
                <Text>Placeholder</Text>
                <Text>Placeholder</Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 15, marginRight: 15, marginBottom: 15 }}>
                <Button
                    title="Member ∨"
                    onPress={() => { }} />
            </View>
        </View >
    );
}