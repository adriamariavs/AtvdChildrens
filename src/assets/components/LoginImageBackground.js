import { ImageBackground } from "react-native";
import { styles } from "../styles/estilos";

export default function loginImagemBackgroud({ children }) {
  return (
    <ImageBackground
      source={require("../images/fundo.jpg")}
      resizeMode="cover"
      style={styles.loginImageBackground}
    >
      {children}
    </ImageBackground>
  );
}
