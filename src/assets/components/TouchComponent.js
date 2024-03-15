import { TouchableOpacity, View, Text } from "react-native";

export default function TouchComponent({ text, clickBtn }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          textAlign: "center",
          borderColor: "#C71585",
          backgroundColor: "#C71585",
          width: 50,
          borderWidth: 2,
          borderRadius: 20,
          padding: 10,
          width: 200,
          alignItems: "center",
          marginBottom: 10,
          shadowColor: "#C71585",
          shadowRadius: 20,
        }}
        onPress={clickBtn}
      >
        <Text> {text} </Text>
      </TouchableOpacity>
    </View>
  );
}
