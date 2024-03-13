import Login from "./src/assets/pages/ Login";
import { View } from "react-native";
import { styles } from "./src/assets/styles/estilos";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
